import { setCryptoSecret } from 'src/privateModule';

export const configureZTK = (options: { cryptoSecret: string }): void => {
  const { cryptoSecret } = options;

  setCryptoSecret(cryptoSecret);
};
