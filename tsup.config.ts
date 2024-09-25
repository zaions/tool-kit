import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts', 'src/play-and-win/index.ts', 'src/roommate/index.ts'],
	format: ['cjs', 'esm'], // Build for commonJS and ESmodules
	dts: true, // Generate declaration file (.d.ts)
	splitting: true,
	sourcemap: true,
	clean: true,
	ignoreWatch: ['node_modules', '.history', '*ignore*', '.vscode', '.git'],
	minify: true,
	outDir: './dist',
	tsconfig: './tsconfig.json',
	treeshake: 'safest',
	target: 'es2015',
	keepNames: false,
	platform: 'neutral',
});
