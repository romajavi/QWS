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

const smtpClient = new SMTPClient({
    user: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
    host: 'smtp.gmail.com',
    ssl: true,
});

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
        // Enviar correo al cliente
        let clientHtml = clientTemplate
            .replace('{nombre}', name)
            .replace('{appointmentDate}', appointmentDate || 'No especificada')
            .replace('{appointmentTime}', appointmentTime || 'No especificada')
            .replace('{appointmentMedium}', appointmentMedium || 'No especificado');

        await smtpClient.sendAsync({
            text: 'Gracias por contactarnos',
            from: `"Axion Dev" <${process.env.EMAIL_USER.trim()}>`,
            to: email.trim(),
            subject: 'Confirmación de recepción - Axion Dev',
            attachment: [
                { data: clientHtml, alternative: true }
            ]
        });

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
            from: `"Axion Dev" <${process.env.EMAIL_USER.trim()}>`,
            to: process.env.ADMIN_EMAIL.trim(),
            subject: 'Nuevo formulario de contacto - Axion Dev',
            attachment: [
                { data: adminHtml, alternative: true }
            ]
        });

        res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({
            error: 'Error al procesar el formulario',
            details: error.message
        });
    }
};

export const sendVerificationCode = async (email, code) => {
    try {
        await smtpClient.sendAsync({
            text: `Tu código de verificación es: ${code}`,
            from: `"Axion Dev" <${process.env.EMAIL_USER.trim()}>`,
            to: email.trim(),
            subject: 'Código de verificación - Panel Admin',
            attachment: [{
                data: `
                    <html>
                        <body style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
                            <h2 style="color: #FFD700;">Axion Dev</h2>
                            <p>Tu código de verificación es:</p>
                            <h1 style="color: #00FFFF; font-size: 32px;">${code}</h1>
                            <p>Este código expirará en 5 minutos.</p>
                            <p style="font-size: 12px; color: #666;">Por favor, no compartas este código con nadie.</p>
                        </body>
                    </html>
                `,
                alternative: true
            }]
        });
        return true;
    } catch (error) {
        console.error('Error al enviar email de verificación:', error);
        return false;
    }
};

export default emailHandler;