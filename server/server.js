import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';
import dotenv from 'dotenv';
import { emailHandler } from './emailHandler.js';
import compression from 'compression';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    try {
        decodeURIComponent(req.path);
        next();
    } catch (error) {
        res.status(400).send('Bad Request - Invalid URL');
    }
});

app.use(compression());
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    credentials: true
}));

app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static(path.join(__dirname, '../public/images')));

app.get('/api/projects', (req, res) => {
    try {
        const portfolioDir = path.join(__dirname, '../public/images/portfolio');
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

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});