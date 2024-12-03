import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import dotenv from 'dotenv';
import emailRouter, { testConnection } from './emailHandler.js';
import compression from 'compression';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configurar NODE_ENV si no está definido
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

// Cargar variables de entorno según el ambiente
const envPath = process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '../config/production.env')
    : path.join(__dirname, '../config/development.env');

console.log('Loading environment from:', envPath);
dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.SERVER_PORT || 5000;

// Log de configuración
console.log('Server configuration:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: PORT,
    CORS_ORIGIN: process.env.CORS_ORIGIN
});

const corsOptions = {
    origin: process.env.NODE_ENV === 'production'
        ? 'http://localhost:3000'  // Cambiado para pruebas
        : 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS']
};

// Log de verificación
console.log('CORS Configuration:', {
    origin: corsOptions.origin,
    environment: process.env.NODE_ENV,
    allowed_methods: corsOptions.methods
});


// Middlewares
app.use(cors(corsOptions));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para logging
app.use((req, res, next) => {
    console.log('Request Headers:', req.headers);
    console.log('Request Origin:', req.headers.origin);
    console.log('Request Method:', req.method);
    console.log('Request Path:', req.path);
    console.log(`${req.method} ${req.url}`);
    console.log('Body:', req.body);
    next();
});


// Configuración de archivos estáticos
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
} else {
    app.use(express.static(path.join(__dirname, '../public')));
}

// Rutas
app.get('/api/test-email', async (req, res) => {
    try {
        console.log('Iniciando prueba de email detallada...');
        const result = await testConnection();
        console.log('Resultado de prueba:', result);
        res.json({ success: true, message: 'Test de email exitoso' });
    } catch (error) {
        console.error('Error detallado en prueba de email:', {
            message: error.message,
            stack: error.stack,
            code: error.code
        });
        res.status(500).json({
            success: false,
            message: 'Error en prueba de email',
            details: error.message
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
    // Corregido el log de CORS para manejar tanto string como array
    console.log(`CORS enabled for: ${Array.isArray(corsOptions.origin)
        ? corsOptions.origin.join(', ')
        : corsOptions.origin}`);
});

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});