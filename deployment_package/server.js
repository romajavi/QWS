import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter, { testConnection } from './emailHandler.js';
import compression from 'compression';

// Configuración de entorno
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno según el ambiente
const envPath = process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), 'config/production.env')
    : path.join(process.cwd(), 'config/development.env');

dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Configuración de CORS
const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? [process.env.CORS_ORIGIN]
        : ['http://localhost:3000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middlewares
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());

// Configuración de archivos estáticos
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
} else {
    app.use(express.static(path.join(__dirname, '../public')));
}

// Rutas
app.get('/api/test-email', async (req, res) => {
    try {
        console.log('Iniciando prueba de email...');
        const result = await testConnection();
        if (result) {
            res.json({ success: true, message: 'Test de email exitoso' });
        } else {
            res.status(500).json({ success: false, message: 'Error en prueba de email' });
        }
    } catch (error) {
        console.error('Error en prueba de email:', error);
        res.status(500).json({
            success: false,
            message: 'Error en prueba de email',
            error: error.message
        });
    }
});

app.post('/api/contact', emailRouter);

// Manejo de errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Ruta catch-all para SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../',
        process.env.NODE_ENV === 'production' ? 'build' : 'public',
        'index.html'
    ));
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`CORS enabled for: ${corsOptions.origin.join(', ')}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
    console.log('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception:', err);
});