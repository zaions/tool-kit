import cryptoJs from 'crypto-js';
import { getCryptoSecret } from 'src/privateModule';

export const encryptData = (val: unknown): string | null => {
  const _cryptoSecret = getCryptoSecret();
  try {
    return cryptoJs.AES.encrypt(JSON.stringify(val), _cryptoSecret).toString();
  } catch (error) {
    return null;
  }
};
export const decryptData = <T>(val: string): T | null => {
  const _cryptoSecret = getCryptoSecret();
  try {
    return JSON.parse(
      cryptoJs.AES.decrypt(val, _cryptoSecret).toString(cryptoJs.enc.Utf8)
    ) as T;
  } catch (error) {
    return null;
  }
};

export const encryptWithSecretKey = (
  data: unknown,
  secretKey: string
): string => {
  const encJson = CryptoJS.AES.encrypt(
    JSON.stringify(data),
    secretKey
  ).toString();
  const encData = CryptoJS.enc.Base64.stringify(
    CryptoJS.enc.Utf8.parse(encJson)
  );

  return encData;
};

export const decryptWithSecretKey = <T = any>(
  encryptedData: string,
  secretKey: string
): T => {
  const decData = CryptoJS.enc.Base64.parse(encryptedData).toString(
    CryptoJS.enc.Utf8
  );
  const bytes = CryptoJS.AES.decrypt(decData, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return JSON.parse(bytes) as T;
};

export const aesDecrypt = <T = any>(
  data: string,
  secretKey: string
): T | null => {
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  try {
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8)) as T;
  } catch (error) {
    return null;
  }
};
