import { setCryptoSecret } from 'src/privateModule';

export const configureZTK = (options: { cryptoSecret: string }) => {
	const { cryptoSecret } = options;

	setCryptoSecret(cryptoSecret);
};
