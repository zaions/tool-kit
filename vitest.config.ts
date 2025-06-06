import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

const _filePath = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filePath);

export default defineConfig({
  test: {
    globals: true,
    include: ['./src/**/*.test.{js,ts}', './tests/**/*.test.{js,ts}'],
  },
  resolve: {
    alias: {
      '@app-utils': path.resolve(__dirname, './src/utils'),
      '@app-enums': path.resolve(__dirname, './src/enums'),
      '@app-types': path.resolve(__dirname, './src/types'),
      '@app': path.resolve(__dirname, './src/'),
    },
  },
  define: {
    'import.meta.vitest': 'undefined',
  },
});
