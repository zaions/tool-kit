import { logPackage } from '@helpers/index';

test('adds two numbers correctly', () => {
	const result = logPackage();
	expect(result).toBe(5);
});
