const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Sirve los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, '../public')));

// API endpoint para obtener los proyectos
app.get('/api/projects', (req, res) => {
    const portfolioDir = path.join(__dirname, '../public/images/portfolio');

    fs.readdir(portfolioDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Unable to scan directory' });
        }

        const projects = files
            .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/))
            .map((file, index) => ({
                id: index + 1,
                name: `Proyecto ${index + 1}`,
                image: file,
                description: `Descripción del Proyecto ${index + 1}`,
                link: `https://ejemplo${index + 1}.com`
            }));

        res.json(projects);
    });
});

// Maneja cualquier solicitud que no coincida con las rutas anteriores
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});