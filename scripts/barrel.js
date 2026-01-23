// barrel.js
const fs = require('fs');
const path = require('path');

const currentDir = process.cwd();
const indexPath = path.join(currentDir, 'index.ts');

console.log(`Generating barrel → ${indexPath}`);

const files = fs
  .readdirSync(currentDir, { withFileTypes: true })
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

if (files.length === 0) {
  console.log('No .ts/.tsx files found (excluding index & tests). Nothing to do.');
  process.exit(0);
}

const lines = [
  '// Auto-generated barrel file – do not edit manually',
  '',
  ...files.map(name => `export * from './${name}';`),
  '',
];

const content = lines.join('\n');

fs.writeFileSync(indexPath, content, 'utf-8');

console.log(`Done. Exported ${files.length} modules:`);
files.forEach(f => console.log(`  - ${f}`));
