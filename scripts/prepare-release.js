import { execSync } from 'child_process';
import fs from 'fs';

const updateVersion = () => {
    try {
        // Obtener la versión actual (usando pkgData en lugar de package)
        const pkgData = JSON.parse(fs.readFileSync('./package.json'));
        const currentVersion = pkgData.version;

        console.log(`📦 Preparando release versión ${currentVersion}`);

        // Crear tag con la versión
        execSync(`git tag v${currentVersion}`);
        console.log(`✅ Tag v${currentVersion} creado`);

        // Push al repositorio con tags
        execSync('git push origin --tags');
        console.log('✅ Tags actualizados en remoto');

        // Merge a staging
        execSync('git checkout staging');
        execSync('git merge develop');
        execSync('git push origin staging');
        console.log('✅ Cambios mergeados a staging');

        // Merge a main si estamos en una versión estable
        if (!currentVersion.includes('-beta')) {
            execSync('git checkout main');
            execSync('git merge staging');
            execSync('git push origin main');
            console.log('✅ Cambios mergeados a main');
        }

        // Volver a develop
        execSync('git checkout develop');

        console.log(`\n✨ Release v${currentVersion} preparado con éxito\n`);
    } catch (error) {
        console.error('\n❌ Error preparando el release:', error.message);
        process.exit(1);
    }
};

updateVersion();