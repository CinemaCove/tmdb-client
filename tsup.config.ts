import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/index.ts'], // Main export file
    format: ['cjs', 'esm'], // CJS and ESM; add 'iife' for browser if needed
    dts: true, // Generate types
    splitting: false, // No code splitting for libs
    sourcemap: true,
    clean: true,
    minify: true, // Production minification
    outExtension: ({ format }) => ({
        js: format === 'cjs' ? '.cjs' : '.mjs', // or '.js' for ESM if you prefer
    }),
});
