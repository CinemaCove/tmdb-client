// generate-endpoint-files.js
import fs from 'fs';
import path from 'path';

const targetDir = process.argv[2] || process.cwd();

// Get the folder name (last part of the path)
const folderName = path.basename(targetDir);

// The two files we want to create
const filesToCreate = [`${folderName}.types.ts`, `${folderName}-endpoint.ts`];

console.log(`Checking folder: ${targetDir}`);
console.log(`Will create (if missing):`);
filesToCreate.forEach(f => console.log(`  - ${f}`));

let createdCount = 0;

for (const fileName of filesToCreate) {
    const filePath = path.join(targetDir, fileName);

    if (fs.existsSync(filePath)) {
        console.log(`Already exists → skipping: ${fileName}`);
        continue;
    }

    // Create empty file
    fs.writeFileSync(filePath, '', 'utf-8');
    console.log(`Created: ${fileName}`);
    createdCount++;
}

if (createdCount === 0) {
    console.log('Nothing to do — both files already exist.');
} else {
    console.log(`Done. Created ${createdCount} file(s).`);

    console.log('\nRunning barrel.js to generate index.ts...');

    const { execSync } = require('child_process');
    const barrelPath = path.join(__dirname, 'barrel.js'); // adjust if needed

    try {
        execSync(`node "${barrelPath}" "${targetDir}"`, { stdio: 'inherit' });
        console.log('Barrel generation completed successfully.');
    } catch (err) {
        console.error('Error running barrel.js:', err.message);
    }
}
