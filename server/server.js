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

if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = 'development';
}

const envPath = process.env.NODE_ENV === 'production'
    ? path.join(__dirname, '../config/production.env')
    : path.join(__dirname, '../config/development.env');

console.log('Loading environment from:', envPath);
dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.SERVER_PORT || 5001;

const corsOptions = {
    origin: '*',  // Para desarrollo
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Accept', 'Origin'],
    credentials: false,
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

// Logging middleware
app.use((req, res, next) => {
    console.log('=== INCOMING REQUEST ===');
    console.log('Headers:', JSON.stringify(req.headers, null, 2));
    console.log('Method:', req.method);
    console.log('Path:', req.path);
    console.log('Origin:', req.headers.origin);
    next();
});

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use((req, res, next) => {
    if (req.method === 'POST') {
        console.log('Request Body:', JSON.stringify(req.body, null, 2));
    }
    next();
});

// Error handling
app.use((err, req, res, next) => {
    console.error('Server Error:', {
        message: err.message,
        stack: err.stack,
        path: req.path
    });
    res.status(500).json({
        success: false,
        error: err.message
    });
});

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
}

app.get('/api/test-email', async (req, res) => {
    try {
        const result = await testConnection();
        console.log('Email test result:', result);
        res.json({ success: true });
    } catch (error) {
        console.error('Email test error:', error);
        res.status(500).json({
            success: false,
            error: error.message
        });
    }
});

app.post('/api/contact', (req, res, next) => {
    console.log('Contact endpoint hit:', {
        url: req.url,
        method: req.method,
        headers: req.headers,
        body: req.body
    });
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept, Origin');
    next();
}, emailRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../',
        process.env.NODE_ENV === 'production' ? 'build' : 'public',
        'index.html'
    ));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} (${process.env.NODE_ENV})`);
    console.log('CORS configuration:', corsOptions);
});

process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});