import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    './src/play-and-win/index.ts',
    './src/roommate/index.ts',
  ],
  format: ['cjs', 'esm'], // Build for commonJS and ESmodules
  dts: true, // Generate declaration file (.d.ts)
  sourcemap: true,
  clean: true,
  ignoreWatch: ['node_modules', '.history', '*ignore*', '.vscode', '.git'],
  minify: false,
  outDir: './dist',
  tsconfig: './tsconfig.json',
  treeshake: true,
  target: 'es2017',
  keepNames: false,
  platform: 'neutral',
});
