let _cryptoSecret: string | null = null;

export const getCryptoSecret = () => {
	if (!_cryptoSecret || _cryptoSecret.trim().length <= 0) {
		throw new Error(
			'@zaions/tool-kit needs "cryptoSecret" value, call "configureZTK" to set that'
		);
	}

	return _cryptoSecret;
};

export const setCryptoSecret = (val: string) => {
	_cryptoSecret = val;
};
