// scripts/deploy.js
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar variables de entorno de producción
dotenv.config({ path: path.join(__dirname, '../config/production.env') });

// Lista de archivos y directorios necesarios para el despliegue
const deployFiles = [
    'build',
    'server',
    'package.json',
    'package-lock.json',
    'config'
];

// Directorio donde se creará el paquete de despliegue
const deployDir = path.join(__dirname, '../deploy');

// Crear el directorio de despliegue si no existe
if (!fs.existsSync(deployDir)) {
    fs.mkdirSync(deployDir);
}

// Copiar archivos necesarios
deployFiles.forEach(file => {
    const sourcePath = path.join(__dirname, '..', file);
    const destPath = path.join(deployDir, file);

    if (fs.existsSync(sourcePath)) {
        if (fs.lstatSync(sourcePath).isDirectory()) {
            // Copiar directorio recursivamente
            fs.cpSync(sourcePath, destPath, { recursive: true });
        } else {
            // Copiar archivo
            fs.copyFileSync(sourcePath, destPath);
        }
    }
});

// Actualizar package.json para producción
const packageJsonPath = path.join(deployDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath));

    // Actualizar scripts
    packageJson.scripts = {
        ...packageJson.scripts,
        start: 'NODE_ENV=production node server/server.js'
    };

    // Eliminar dependencias de desarrollo si existen
    delete packageJson.devDependencies;

    // Guardar el package.json actualizado
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

// Crear archivo .env para producción
fs.copyFileSync(
    path.join(__dirname, '../config/production.env'),
    path.join(deployDir, '.env')
);

console.log('Paquete de despliegue creado en el directorio "deploy"');