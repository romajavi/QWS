import { exec } from 'child_process';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), 'config/production.env') });

const deploy = async () => {
    try {
        // 1. Build del proyecto
        console.log('Building project...');
        await execCommand('npm run build');

        // 2. Verificar build
        console.log('Verifying build...');
        await execCommand('ls -la build/');

        // 3. Comprimir archivos estáticos
        console.log('Compressing static files...');
        await execCommand('gzip -kr build/static/');

        console.log('Deployment preparation completed successfully!');
    } catch (error) {
        console.error('Deployment failed:', error);
        process.exit(1);
    }
};

const execCommand = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error}`);
                reject(error);
                return;
            }
            console.log(stdout);
            resolve(stdout);
        });
    });
};

deploy();