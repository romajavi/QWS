import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables based on environment
const envPath = process.env.NODE_ENV === 'production'
    ? resolve(__dirname, '../config/production.env')
    : resolve(__dirname, '../config/development.env');

console.log('================== SERVER STARTUP ==================');
console.log('Current directory:', __dirname);
console.log('Loading environment from:', envPath);
console.log('NODE_ENV:', process.env.NODE_ENV);

dotenv.config({ path: envPath });

// Email configuration
const EMAIL_CONFIG = {
    EMAIL_USER: process.env.EMAIL_USER,
    EMAIL_PASS: process.env.EMAIL_PASS,
    SMTP_HOST: process.env.SMTP_HOST,
    SMTP_PORT: parseInt(process.env.SMTP_PORT) || 587,
    ADMIN_EMAIL: process.env.ADMIN_EMAIL,
    EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME || 'AxionDev',
    SMTP_SECURE: process.env.SMTP_SECURE === 'true'
};

console.log('Email Configuration loaded:', {
    host: EMAIL_CONFIG.SMTP_HOST,
    port: EMAIL_CONFIG.SMTP_PORT,
    user: EMAIL_CONFIG.EMAIL_USER,
    secure: EMAIL_CONFIG.SMTP_SECURE
});

// Create nodemailer transporter
const createTransporter = () => {
    const transportConfig = {
        host: EMAIL_CONFIG.SMTP_HOST,
        port: EMAIL_CONFIG.SMTP_PORT,
        secure: EMAIL_CONFIG.SMTP_SECURE,
        auth: {
            user: EMAIL_CONFIG.EMAIL_USER,
            pass: EMAIL_CONFIG.EMAIL_PASS
        },
        debug: true,
        logger: true
    };

    console.log('Creating transporter with config:', {
        ...transportConfig,
        auth: { user: EMAIL_CONFIG.EMAIL_USER }
    });

    return nodemailer.createTransport(transportConfig);
};

const transporter = createTransporter();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN.split(','),
    credentials: true
}));

console.log('================== SERVER CONFIG ==================');
console.log({
    environment: process.env.NODE_ENV,
    port: process.env.SERVER_PORT,
    corsOrigin: process.env.CORS_ORIGIN,
    apiUrl: process.env.REACT_APP_API_URL
});

// Test route
app.get('/api/test', (req, res) => {
    console.log('Test route accessed');
    res.json({ message: 'Server is running' });
});

// Contact form handler
app.post('/api/contact', async (req, res) => {
    console.log('================== NEW CONTACT REQUEST ==================');
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);

    const {
        name,
        email,
        phone,
        appointmentDate,
        appointmentTime,
        appointmentMedium,
        observations
    } = req.body;

    try {
        // Validate required fields
        if (!email || !name || !phone || !observations) {
            console.log('Validation failed:', { email, name, phone, observations });
            return res.status(400).json({
                success: false,
                error: 'campos_requeridos',
                message: 'Faltan campos requeridos'
            });
        }

        // Load email templates
        console.log('Loading email templates...');
        const clientTemplate = fs.readFileSync(
            resolve(__dirname, './templates/clientEmailTemplate.html'),
            'utf8'
        )
            .replace(/{{name}}/g, name)  
            .replace(/{{appointmentDate}}/g, appointmentDate || 'No especificada')  
            .replace(/{{appointmentTime}}/g, appointmentTime || 'No especificada')  
            .replace(/{{appointmentMedium}}/g, appointmentMedium || 'No especificado');  

            const adminTemplate = fs.readFileSync(
                resolve(__dirname, './templates/adminEmailTemplate.html'),
                'utf8'
            )
                .replace(/{{name}}/g, name) 
                .replace(/{{email}}/g, email)
                .replace(/{{phone}}/g, phone) 
                .replace(/{{appointmentDate}}/g, appointmentDate || 'No especificada')
                .replace(/{{appointmentTime}}/g, appointmentTime || 'No especificada')
                .replace(/{{appointmentMedium}}/g, appointmentMedium || 'No especificado')
                .replace(/{{observations}}/g, observations);  

        console.log('Sending emails...');
        const emailResults = await Promise.all([
            transporter.sendMail({
                from: `"${EMAIL_CONFIG.EMAIL_FROM_NAME}" <${EMAIL_CONFIG.EMAIL_USER}>`,
                to: email,
                subject: 'Confirmación de contacto - AxionDev|',
                html: clientTemplate
            }),
            transporter.sendMail({
                from: `"${EMAIL_CONFIG.EMAIL_FROM_NAME}" <${EMAIL_CONFIG.EMAIL_USER}>`,
                to: EMAIL_CONFIG.ADMIN_EMAIL,
                subject: 'Nuevo contacto recibido - AxionDev|',
                html: adminTemplate
            })
        ]);

        console.log('Email results:', emailResults);
        res.status(200).json({
            success: true,
            message: 'Formulario procesado exitosamente'
        });

    } catch (error) {
        console.error('================== ERROR ==================');
        console.error('Error details:', {
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
});

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log('================== SERVER READY ==================');
});