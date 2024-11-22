import { execSync } from 'child_process';
import fs from 'fs';

const updateVersion = () => {
    try {
        // Obtener la versión actual
        const package = JSON.parse(fs.readFileSync('./package.json'));
        const currentVersion = package.version;

        // Crear tag con la versión
        execSync(`git tag v${currentVersion}`);

        // Push al repositorio con tags
        execSync('git push origin --tags');

        // Merge a staging
        execSync('git checkout staging');
        execSync('git merge develop');
        execSync('git push origin staging');

        // Merge a main si estamos en una versión estable
        if (!currentVersion.includes('-beta')) {
            execSync('git checkout main');
            execSync('git merge staging');
            execSync('git push origin main');
        }

        console.log(`✅ Release v${currentVersion} preparado con éxito`);
    } catch (error) {
        console.error('❌ Error preparando el release:', error);
        process.exit(1);
    }
};

updateVersion();