import { defineConfig } from 'tsdown';
import { resolve } from 'node:path';

const isDebug = process.env.NODE_ENV !== 'production';

export default defineConfig({
    entry: {
        core: 'src/core/index.ts',
        utils: 'src/utils/index.ts',
        v3: 'src/v3/index.ts',
        v4: 'src/v4/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    minify: !isDebug,
    external: ['axios'],
    resolve: {
        alias: {
            '#core': resolve('./src/core'),
            '#utils': resolve('./src/utils'),
        },
    },
});
