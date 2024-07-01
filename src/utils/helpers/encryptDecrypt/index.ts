import { AES, enc } from 'crypto-js';
import { getCryptoSecret } from 'src/privateModule';

export const encryptData = (val: unknown): string | null => {
	const _cryptoSecret = getCryptoSecret();
	try {
		return AES.encrypt(JSON.stringify(val), _cryptoSecret).toString();
	} catch (error) {
		return null;
	}
};
export const decryptData = <T>(val: string): T | null => {
	const _cryptoSecret = getCryptoSecret();
	try {
		return JSON.parse(AES.decrypt(val, _cryptoSecret).toString(enc.Utf8)) as T;
	} catch (error) {
		return null;
	}
};
