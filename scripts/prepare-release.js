import { execSync } from 'child_process';
import fs from 'fs';

const updateVersion = () => {
    try {
        // Obtener la versión actual
        const pkgData = JSON.parse(fs.readFileSync('./package.json'));
        const currentVersion = pkgData.version;

        console.log(`📦 Preparando release versión ${currentVersion}`);

        // Commit de los cambios de versión
        execSync('git add package.json package-lock.json');
        execSync(`git commit -m "chore(release): versión ${currentVersion}"`);

        // Crear tag
        execSync(`git tag -a v${currentVersion} -m "Release ${currentVersion}"`);
        console.log(`✅ Tag v${currentVersion} creado`);

        // Push de cambios y tags
        execSync('git push origin develop');
        execSync('git push origin --tags');
        console.log('✅ Cambios y tags actualizados en remoto');

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