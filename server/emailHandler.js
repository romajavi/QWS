import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Función para cargar la configuración del ambiente
const loadConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    const configPath = path.join(__dirname, '../config', `${env}.env`);

    console.log(`Cargando configuración de: ${configPath}`);
    dotenv.config({ path: configPath });

    const config = {
        EMAIL_USER: process.env.EMAIL_USER,
        EMAIL_PASS: process.env.EMAIL_PASS,
        SMTP_HOST: process.env.SMTP_HOST,
        SMTP_PORT: parseInt(process.env.SMTP_PORT) || 587,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || 'QuantumWeb',
        SMTP_SECURE: process.env.SMTP_SECURE === 'true'
    };

    console.log('Configuración cargada:', {
        host: config.SMTP_HOST,
        port: config.SMTP_PORT,
        user: config.EMAIL_USER,
        secure: config.SMTP_SECURE
    });

    return config;
};

const CONFIG = loadConfig();

const createTransporter = () => {
    const transportConfig = {
        host: CONFIG.SMTP_HOST,
        port: CONFIG.SMTP_PORT,
        secure: CONFIG.SMTP_SECURE,
        auth: {
            user: CONFIG.EMAIL_USER,
            pass: CONFIG.EMAIL_PASS
        },
        debug: true,
        logger: true
    };

    console.log('Creando transportador con configuración:', {
        ...transportConfig,
        auth: { user: CONFIG.EMAIL_USER }
    });

    return nodemailer.createTransport(transportConfig);
};

const sendEmail = async (options) => {
    const transporter = createTransporter();
    console.log('====== INICIO ENVÍO EMAIL ======');

    try {
        const info = await transporter.sendMail({
            from: `"${CONFIG.EMAIL_FROM_NAME}" <${CONFIG.EMAIL_USER}>`,
            to: options.to,
            subject: options.subject,
            html: options.html
        });

        console.log('Email enviado exitosamente:', info);
        return info;
    } catch (error) {
        console.error('Error al enviar email:', error);
        throw error;
    }
};

// Manejador principal del formulario de contacto
const emailHandler = async (req, res) => {
    console.log('==== INICIO PROCESAMIENTO EMAIL ====');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Configuración:', CONFIG);
    console.log('Configuración SMTP:', {
        host: CONFIG.SMTP_HOST,
        port: CONFIG.SMTP_PORT,
        user: CONFIG.EMAIL_USER,
        secure: CONFIG.SMTP_SECURE
    });

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

        if (!email || !name || !phone || !observations) {
            console.log('Validación fallida:', { email, name, phone, observations });
            return res.status(400).json({
                success: false,
                error: 'campos_requeridos',
                message: 'Faltan campos requeridos'
            });
        }

        console.log('Preparando templates de email...');
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

        console.log('Preparando envío de emails');
        const emailResults = await Promise.all([
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

        console.log('Resultado envío emails:', emailResults);
        res.status(200).json({
            success: true,
            message: 'Formulario procesado exitosamente'
        });

    } catch (error) {
        console.error('Error en procesamiento:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        res.status(500).json({
            success: false,
            error: 'error_envio',
            message: process.env.NODE_ENV === 'development'
                ? `Error: ${error.message}`
                : 'Error al procesar el formulario'
        });
    }
};

// Función de prueba de conexión
export const testConnection = async () => {
    try {
        console.log('Iniciando prueba de conexión SMTP...');

        const result = await sendEmail({
            to: CONFIG.ADMIN_EMAIL,
            subject: 'Prueba de Conexión SMTP',
            html: `
                <h1>Prueba de Conexión SMTP</h1>
                <p>Esta es una prueba de conexión realizada el ${new Date().toLocaleString()}</p>
            `
        });

        console.log('Prueba de conexión exitosa:', result);
        return true;
    } catch (error) {
        console.error('Error detallado en prueba de conexión:', {
            message: error.message,
            code: error.code,
            command: error.command
        });
        return false;
    }
};

export default emailHandler;