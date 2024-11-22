import { SMTPClient } from 'emailjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno según el ambiente
const envPath = process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), 'config/production.env')
    : path.join(process.cwd(), 'config/development.env');

dotenv.config({ path: envPath });

console.log('Ambiente:', process.env.NODE_ENV);
console.log('Ruta del env:', envPath);
console.log('Variables cargadas:', {
    EMAIL_USER: process.env.EMAIL_USER,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: process.env.SMTP_PORT
});

const clientTemplate = fs.readFileSync(path.join(__dirname, 'clientEmailTemplate.html'), 'utf8');
const adminTemplate = fs.readFileSync(path.join(__dirname, 'adminEmailTemplate.html'), 'utf8');

// Configuración SMTP
const getSmtpConfig = () => {
    const config = {
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASS,
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT),
        ssl: process.env.SMTP_SECURE === 'true',
        timeout: 10000
    };

    console.log('SMTP Config:', {
        ...config,
        password: '******'
    });

    return config;
};

const smtpClient = new SMTPClient(getSmtpConfig());

// Función de prueba
export const testConnection = async () => {
    try {
        console.log('Iniciando prueba de conexión SMTP...');
        
        await smtpClient.sendAsync({
            text: 'Test connection',
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'Test Email'
        });

        console.log('¡Prueba de conexión SMTP exitosa!');
        return true;
    } catch (error) {
        console.error('Error en prueba SMTP:', error);
        return false;
    }
};

// Función principal de manejo de emails
const emailHandler = async (req, res) => {
    const {
        name,
        email,
        phone,
        company,
        contactPreference,
        contactDays,
        contactTime,
        appointmentDate,
        appointmentTime,
        appointmentMedium,
        observations
    } = req.body;

    try {
        console.log('Iniciando envío de email...');

        // Enviar correo al cliente
        let clientHtml = clientTemplate
            .replace('{nombre}', name)
            .replace('{appointmentDate}', appointmentDate || 'No especificada')
            .replace('{appointmentTime}', appointmentTime || 'No especificada')
            .replace('{appointmentMedium}', appointmentMedium || 'No especificado');

        console.log('Enviando email al cliente:', email);

        await smtpClient.sendAsync({
            text: 'Gracias por contactarnos',
            from: `"Axion Dev" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Confirmación de recepción - Axion Dev',
            attachment: [
                { data: clientHtml, alternative: true }
            ]
        });

        console.log('Email al cliente enviado exitosamente');
        console.log('Enviando email al administrador...');

        // Enviar correo al administrador
        let adminHtml = adminTemplate
            .replace('{nombre}', name)
            .replace('{email}', email)
            .replace('{telefono}', phone)
            .replace('{empresa}', company || 'No especificada')
            .replace('{preferencia_contacto}', Array.isArray(contactPreference) ? contactPreference.join(', ') : contactPreference)
            .replace('{dias_contacto}', Array.isArray(contactDays) ? contactDays.join(', ') : contactDays)
            .replace('{horario_contacto}', Array.isArray(contactTime) ? contactTime.join(', ') : contactTime)
            .replace('{appointmentDate}', appointmentDate || 'No especificada')
            .replace('{appointmentTime}', appointmentTime || 'No especificada')
            .replace('{appointmentMedium}', appointmentMedium || 'No especificado')
            .replace('{observaciones}', observations || 'Sin observaciones');

        await smtpClient.sendAsync({
            text: 'Nuevo formulario de contacto recibido',
            from: `"Axion Dev" <${process.env.EMAIL_USER}>`,
            to: process.env.ADMIN_EMAIL,
            subject: 'Nuevo formulario de contacto - Axion Dev',
            attachment: [
                { data: adminHtml, alternative: true }
            ]
        });

        console.log('Email al administrador enviado exitosamente');
        res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar email:', error);
        res.status(500).json({
            error: 'Error al procesar el formulario',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// Solo exportamos una vez cada función
export default emailHandler;
