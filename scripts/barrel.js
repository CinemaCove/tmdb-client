// barrel.js
const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const indexPath = path.join(currentDir, 'index.ts');

console.log(`Generating barrel → ${indexPath}`);

const entries = fs.readdirSync(currentDir, { withFileTypes: true });

const files = entries
    .filter(
        entry =>
            entry.isFile() &&
            /\.(ts|tsx)$/.test(entry.name) &&
            entry.name !== 'index.ts' &&
            !entry.name.endsWith('.test.ts') &&
            !entry.name.endsWith('.spec.ts') &&
            !entry.name.endsWith('.d.ts')
    )
    .map(entry => entry.name.replace(/\.[jt]sx?$/, '')); // remove extension

const folders = entries
    .filter(entry => entry.isDirectory())
    .filter(entry => fs.existsSync(path.join(currentDir, entry.name, 'index.ts')))
    .map(entry => entry.name);

const exportItems = folders.concat(files);

if (exportItems.length === 0) {
    console.log('No exports found. Nothing to do.');
    process.exit(0);
}

const lines = [
    '// Auto-generated barrel file – do not edit manually',
    '',
    ...exportItems.map(name => `export * from './${name}';`),
    '',
];

const content = lines.join('\n');

fs.writeFileSync(indexPath, content, 'utf-8');

console.log(`Done. Exported ${exportItems.length} modules:`);
exportItems.forEach(f => console.log(`  - ${f}`));
