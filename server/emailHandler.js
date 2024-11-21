import { SMTPClient } from 'emailjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientTemplate = fs.readFileSync(path.join(__dirname, 'clientEmailTemplate.html'), 'utf8');
const adminTemplate = fs.readFileSync(path.join(__dirname, 'adminEmailTemplate.html'), 'utf8');

// Configuración actualizada para Gmail
const smtpClient = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: 'smtp.gmail.com',  // Hardcodeado para desarrollo
    port: 587,               // Puerto para TLS
    tls: true,              // Usar TLS
    timeout: 10000,         // Timeout de 10 segundos
});

// Función de prueba mejorada
const testConnection = async () => {
    try {
        console.log('Testing SMTP connection...');
        console.log('Using credentials:', {
            host: 'smtp.gmail.com',
            port: 587,
            user: process.env.EMAIL_USER,
            tls: true
        });

        await smtpClient.sendAsync({
            text: 'Test connection',
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Test Email'
        });

        console.log('SMTP Connection test successful!');
    } catch (error) {
        console.error('SMTP Connection test failed:', error.message);
        console.error('Full error:', error);
    }
};

// Ejecutar test al iniciar
testConnection();

export const emailHandler = async (req, res) => {
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
        console.log('Sending email to client...');

        // Enviar correo al cliente
        let clientHtml = clientTemplate
            .replace('{nombre}', name)
            .replace('{appointmentDate}', appointmentDate || 'No especificada')
            .replace('{appointmentTime}', appointmentTime || 'No especificada')
            .replace('{appointmentMedium}', appointmentMedium || 'No especificado');

        await smtpClient.sendAsync({
            text: 'Gracias por contactarnos',
            from: `"Axion Dev" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Confirmación de recepción - Axion Dev',
            attachment: [
                { data: clientHtml, alternative: true }
            ]
        });

        console.log('Client email sent successfully');
        console.log('Sending email to admin...');

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

        console.log('Admin email sent successfully');
        res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            error: 'Error al procesar el formulario',
            details: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

export default emailHandler;