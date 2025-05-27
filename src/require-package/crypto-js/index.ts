import cryptoJs from 'crypto-js';
import { getCryptoSecret } from 'src/privateModule';

/**
 * Encrypt data using the crypto secret.
 *
 * @param {unknown} val - The data to encrypt.
 * @returns {string | null} The encrypted data.
 */
export const encryptData = (val: unknown): string | null => {
  const _cryptoSecret = getCryptoSecret();
  try {
    return cryptoJs.AES.encrypt(JSON.stringify(val), _cryptoSecret)?.toString();
  } catch (error) {
    return null;
  }
};

/**
 * Decrypt data using the crypto secret.
 *
 * @param {string} val - The data to decrypt.
 * @returns {T | null} The decrypted data.
 */
export const decryptData = <T>(val: string): T | null => {
  const _cryptoSecret = getCryptoSecret();
  try {
    return JSON.parse(
      cryptoJs.AES.decrypt(val, _cryptoSecret)?.toString(cryptoJs.enc.Utf8)
    ) as T;
  } catch (error) {
    return null;
  }
};

/**
 * Encrypt data using a secret key.
 *
 * @param {unknown} data - The data to encrypt.
 * @param {string} secretKey - The secret key.
 * @returns {string} The encrypted data.
 */
export const encryptWithSecretKey = (
  data: unknown,
  secretKey: string
): string => {
  const encJson = cryptoJs.AES.encrypt(
    JSON.stringify(data),
    secretKey
  )?.toString();
  const encData = cryptoJs.enc.Base64.stringify(
    cryptoJs.enc.Utf8.parse(encJson)
  );

  return encData;
};

/**
 * Decrypt data using a secret key.
 *
 * @param {string} encryptedData - The data to decrypt.
 * @param {string} secretKey - The secret key.
 * @returns {T} The decrypted data.
 */
export const decryptWithSecretKey = <T = any>(
  encryptedData: string,
  secretKey: string
): T => {
  const decData = cryptoJs.enc.Base64.parse(encryptedData)?.toString(
    cryptoJs.enc.Utf8
  );
  const bytes = cryptoJs.AES.decrypt(decData, secretKey)?.toString(
    cryptoJs.enc.Utf8
  );

  return JSON.parse(bytes) as T;
};

/**
 * Decrypt data using a secret key.
 *
 * @param {string} data - The data to decrypt.
 * @param {string} secretKey - The secret key.
 * @returns {T | null} The decrypted data.
 */
export const aesDecrypt = <T = any>(
  data: string,
  secretKey: string
): T | null => {
  const bytes = cryptoJs.AES.decrypt(data, secretKey);
  try {
    return JSON.parse(bytes?.toString(cryptoJs.enc.Utf8)) as T;
  } catch (error) {
    return null;
  }
};
