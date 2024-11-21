// server/server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import { emailHandler } from './emailHandler.js';
import compression from 'compression';

// Cargar la configuración según el entorno
if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: path.join(process.cwd(), 'config/production.env') });
} else {
    dotenv.config({ path: path.join(process.cwd(), 'config/development.env') });
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS mejorada
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.CORS_ORIGIN, 'https://tudominio.com'] // Agrega aquí tu dominio de producción
        : ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use((req, res, next) => {
    try {
        decodeURIComponent(req.path);
        next();
    } catch (error) {
        res.status(400).send('Bad Request - Invalid URL');
    }
});

// Middlewares
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());

// Configuración de archivos estáticos
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
    app.use('/images', express.static(path.join(__dirname, '../build/images')));
} else {
    app.use(express.static('public'));
    app.use('/images', express.static(path.join(__dirname, '../public/images')));
}

//prueba mails
app.get('/api/test-email', async (req, res) => {
    try {
        await testConnection();
        res.json({ message: 'Test email sent successfully' });
    } catch (error) {
        res.status(500).json({ 
            error: 'Failed to send test email',
            details: error.message 
        });
    }
});


// Rutas API
app.get('/api/projects', (req, res) => {
    try {
        const portfolioDir = process.env.NODE_ENV === 'production'
            ? path.join(__dirname, '../build/images/portfolio')
            : path.join(__dirname, '../public/images/portfolio');

        const files = fs.readdirSync(portfolioDir);
        const projects = files
            .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/))
            .map((file, index) => ({
                id: index + 1,
                name: `Proyecto ${index + 1}`,
                image: file,
                description: `Descripción del Proyecto ${index + 1}`,
                link: `https://ejemplo.com/proyecto-${index + 1}`
            }));

        res.json(projects);
    } catch (error) {
        console.error('Error loading projects:', error);
        res.status(500).json({ error: 'Unable to scan directory' });
    }
});

app.post('/api/contact', emailHandler);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Ruta catch-all para SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, process.env.NODE_ENV === 'production'
        ? '../build/index.html'
        : '../public/index.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`CORS enabled for: ${corsOptions.origin}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception:', err);
});