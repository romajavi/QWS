import { execSync } from 'child_process';
import fs from 'fs';

const updateVersion = () => {
    try {
        const pkgData = JSON.parse(fs.readFileSync('./package.json'));
        const currentVersion = pkgData.version;

        console.log(`📦 Preparando release versión ${currentVersion}`);

        // Crear tag anotado
        try {
            execSync(`git tag -a v${currentVersion} -m "Release ${currentVersion}"`);
            console.log(`✅ Tag v${currentVersion} creado`);
        } catch (tagError) {
            if (tagError.message.includes('already exists')) {
                console.log(`ℹ️ Tag v${currentVersion} ya existe, continuando...`);
            } else {
                throw tagError;
            }
        }

        // Push tags
        execSync('git push origin --tags');
        console.log('✅ Tags actualizados en remoto');

        // Merge a staging
        execSync('git checkout staging');
        execSync('git merge develop');
        execSync('git push origin staging');
        console.log('✅ Cambios mergeados a staging');

        // Merge a main
        execSync('git checkout main');
        execSync('git merge staging');
        execSync('git push origin main');
        console.log('✅ Cambios mergeados a main');

        // Volver a develop
        execSync('git checkout develop');

        console.log(`\n✨ Release v${currentVersion} completado con éxito\n`);
    } catch (error) {
        console.error('\n❌ Error preparando el release:', error.message);
        process.exit(1);
    }
};

updateVersion();