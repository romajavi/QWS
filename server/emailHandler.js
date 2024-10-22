import { SMTPClient } from 'emailjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { Message } from 'emailjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientTemplate = fs.readFileSync(path.join(__dirname, 'clientEmailTemplate.html'), 'utf8');
const adminTemplate = fs.readFileSync(path.join(__dirname, 'adminEmailTemplate.html'), 'utf8');

export const emailHandler = async (req, res) => {
    const { name, email, phone, company, contactPreference, contactDays, contactTime, appointmentDate, appointmentTime, appointmentMedium, observations } = req.body;

    const client = new SMTPClient({
        user: process.env.EMAIL_USER,
        password: process.env.EMAIL_PASS,
        host: 'smtp.gmail.com',
        ssl: true,
    });

    try {
        // Enviar correo al cliente
        let clientHtml = clientTemplate
            .replace('{nombre}', name)
            .replace('{appointmentDate}', appointmentDate)
            .replace('{appointmentTime}', appointmentTime)
            .replace('{appointmentMedium}', appointmentMedium);

        const clientMessage = new Message({
            text: 'Gracias por contactarnos',
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Confirmación de recepción - Quantum Web Services',
            attachment: [
                { data: clientHtml, alternative: true }
            ]
        });

        await client.sendAsync(clientMessage);

        // Enviar correo al administrador
        let adminHtml = adminTemplate
            .replace('{nombre}', name)
            .replace('{email}', email)
            .replace('{telefono}', phone)
            .replace('{empresa}', company)
            .replace('{preferencia_contacto}', contactPreference.join(', '))
            .replace('{dias_contacto}', contactDays.join(', '))
            .replace('{horario_contacto}', contactTime.join(', '))
            .replace('{appointmentDate}', appointmentDate)
            .replace('{appointmentTime}', appointmentTime)
            .replace('{appointmentMedium}', appointmentMedium)
            .replace('{observaciones}', observations);

        const adminMessage = new Message({
            text: 'Nuevo formulario de contacto recibido',
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'Nuevo formulario de contacto - Quantum Web Services',
            attachment: [
                { data: adminHtml, alternative: true }
            ]
        });

        await client.sendAsync(adminMessage);

        res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).json({ error: 'Error al procesar el formulario' });
    }
};
export default emailHandler;