import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        globals: true,
        environment: 'node',
        typecheck: {
            enabled: true,
            tsconfig: 'tsconfig.test.json',
            include: ['**/*.{test,spec}.{ts,tsx}'],
        },
        coverage: {
            provider: 'v8',
            reporter: ['text', 'html'],
        },
    },
});
