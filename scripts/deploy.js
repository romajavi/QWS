import { exec } from 'child_process';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), 'config/production.env') });

const deploy = async () => {
    try {
        console.log('Building project...');
        await execCommand('npm run build');

        console.log('Verifying build...');
        const verifyCommand = process.platform === 'win32'
            ? 'dir build'
            : 'ls -la build/';
        await execCommand(verifyCommand);

        console.log('Compressing static files...');
        if (process.platform === 'win32') {
            // Windows alternativa a gzip
            console.log('Compression skipped on Windows');
        } else {
            await execCommand('gzip -kr build/static/');
        }

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