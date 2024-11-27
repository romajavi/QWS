import { SMTPClient } from 'emailjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname } from 'path';

// Configuración de rutas base
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para cargar la configuración del ambiente
const loadConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    const configPath = path.join(__dirname, '../config', `${env}.env`);

    console.log(`Cargando configuración de: ${configPath}`);
    dotenv.config({ path: configPath });

    // Validamos y retornamos la configuración necesaria
    const config = {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: parseInt(process.env.SMTP_PORT) || 587, // Puerto por defecto para TLS
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || 'QuantumWeb'
    };

    // Verificación de configuración requerida
    const requiredFields = ['EMAIL_USER', 'EMAIL_PASS', 'SMTP_HOST', 'ADMIN_EMAIL'];
    const missingFields = requiredFields.filter(field => !config[field]);

    if (missingFields.length) {
        throw new Error(`Configuración incompleta. Campos faltantes: ${missingFields.join(', ')}`);
    }

    return config;
};

const CONFIG = loadConfig();

// Función mejorada para crear el cliente SMTP
const createSmtpClient = () => {
    const config = {
        user: CONFIG.EMAIL_USER,
        password: CONFIG.EMAIL_PASS,
        host: CONFIG.SMTP_HOST,
        port: 587, // Puerto específico para Gmail con TLS
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        },
        timeout: 30000,
        debug: true
    };

    console.log('Configuración SMTP:', {
        host: config.host,
        port: config.port,
        user: config.user,
        debug: config.debug
    });

    return new SMTPClient(config);
};

// Función mejorada para envío de emails
const sendEmail = async (options) => {
    const client = createSmtpClient();

    try {
        console.log('Iniciando envío de email:', {
            to: options.to,
            subject: options.subject
        });

        const result = await client.sendAsync({
            from: `"${CONFIG.EMAIL_FROM_NAME}" <${CONFIG.EMAIL_USER}>`,
            to: options.to,
            subject: options.subject,
            attachment: [{
                data: options.html,
                alternative: true
            }]
        });

        console.log('Email enviado exitosamente:', {
            to: options.to,
            messageId: result.header['message-id']
        });

        return result;
    } catch (error) {
        console.error('Error en envío de email:', {
            error: error.message,
            code: error.code,
            command: error.command
        });
        throw error;
    }
};

// Manejador principal del formulario de contacto
const emailHandler = async (req, res) => {
    try {
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

        console.log('Procesando formulario de contacto:', { name, email, phone });

        // Validación de campos requeridos
        if (!email || !name || !phone || !observations) {
            return res.status(400).json({
                success: false,
                error: 'campos_requeridos',
                message: 'Faltan campos requeridos (nombre, email, teléfono, observaciones)'
            });
        }

        // Carga y preparación de templates
        const clientTemplate = fs.readFileSync(
            path.join(__dirname, 'clientEmailTemplate.html'),
            'utf8'
        )
            .replace(/{nombre}/g, name)
            .replace(/{appointmentDate}/g, appointmentDate || 'No especificada')
            .replace(/{appointmentTime}/g, appointmentTime || 'No especificada')
            .replace(/{appointmentMedium}/g, appointmentMedium || 'No especificado');

        const adminTemplate = fs.readFileSync(
            path.join(__dirname, 'adminEmailTemplate.html'),
            'utf8'
        )
            .replace(/{nombre}/g, name)
            .replace(/{email}/g, email)
            .replace(/{telefono}/g, phone)
            .replace(/{empresa}/g, company || 'No especificada')
            .replace(/{preferencia_contacto}/g, Array.isArray(contactPreference) ? contactPreference.join(', ') : 'No especificada')
            .replace(/{dias_contacto}/g, Array.isArray(contactDays) ? contactDays.join(', ') : 'No especificado')
            .replace(/{horario_contacto}/g, Array.isArray(contactTime) ? contactTime.join(', ') : 'No especificado')
            .replace(/{appointmentDate}/g, appointmentDate || 'No especificada')
            .replace(/{appointmentTime}/g, appointmentTime || 'No especificada')
            .replace(/{appointmentMedium}/g, appointmentMedium || 'No especificado')
            .replace(/{observaciones}/g, observations);

        // Envío de emails
        await Promise.all([
            sendEmail({
                to: email,
                subject: 'Confirmación de contacto - QuantumWeb',
                html: clientTemplate
            }),
            sendEmail({
                to: CONFIG.ADMIN_EMAIL,
                subject: 'Nuevo contacto recibido - QuantumWeb',
                html: adminTemplate
            })
        ]);

        console.log('Proceso de contacto completado exitosamente');
        res.status(200).json({
            success: true,
            message: 'Formulario procesado exitosamente'
        });

    } catch (error) {
        console.error('Error en procesamiento de formulario:', error);
        res.status(500).json({
            success: false,
            error: 'error_envio',
            message: process.env.NODE_ENV === 'development' ?
                `Error: ${error.message}` :
                'Error al procesar el formulario'
        });
    }
};

// Función de prueba de conexión
export const testConnection = async () => {
    try {
        console.log('Iniciando prueba de conexión SMTP...');

        await sendEmail({
            to: CONFIG.ADMIN_EMAIL,
            subject: 'Prueba de Conexión SMTP',
            html: `
                <h1>Prueba de Conexión SMTP</h1>
                <p>Esta es una prueba de conexión realizada el ${new Date().toLocaleString()}</p>
            `
        });

        console.log('Prueba de conexión exitosa');
        return true;
    } catch (error) {
        console.error('Error en prueba de conexión:', error);
        return false;
    }
};

export default emailHandler;