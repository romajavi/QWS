import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rollback = async () => {
    try {
        // Buscar el directorio de backup más reciente
        const backupDir = fs.readdirSync(path.join(__dirname, '..'))
            .filter(dir => dir.startsWith('backup_'))
            .sort()
            .pop();

        if (!backupDir) {
            throw new Error('No se encontró directorio de backup');
        }

        console.log(`Iniciando rollback desde ${backupDir}`);

        // Ejecutar comandos usando rutas relativas a Windows
        execSync('npm run build', { stdio: 'inherit' });

        // Copiar archivos usando comandos Windows
        execSync(`xcopy "${path.join(__dirname, '..', backupDir)}\\*" "${path.join(__dirname, '..', 'build')}" /E /I /Y`,
            { stdio: 'inherit' });

        // Revertir último commit y forzar push
        execSync('git reset --hard HEAD~1', { stdio: 'inherit' });
        execSync('git push origin main --force', { stdio: 'inherit' });

        console.log('Rollback completado exitosamente');
    } catch (error) {
        console.error('Error durante el rollback:', error.message);
        process.exit(1);
    }
};

// Ejecutar rollback
console.log('Iniciando proceso de rollback...');
rollback().catch(console.error);