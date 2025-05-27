// Types
/**
 * Type representing the options for a coupon code.
 */
export interface CouponOptions {
  parts: number;
  partLen: number;
  plaintext?: string;
}

/**
 * Type representing an object of symbols.
 */
type SymbolsObject = {
  [key: string]: number;
};

// Constants
/**
 * List of bad words.
 */
const badWordsList: string[] = (
  'SHPX PHAG JNAX JNAT CVFF PBPX FUVG GJNG GVGF SNEG URYY ZHSS QVPX XABO ' +
  'NEFR FUNT GBFF FYHG GHEQ FYNT PENC CBBC OHGG SRPX OBBO WVFZ WVMM CUNG'
)
  ?.replace(/[a-zA-Z]/g, function (c: string): string {
    const charCode: number = c?.charCodeAt(0);
    const baseCode: number = c <= 'Z' ? 90 : 122;
    const rotated: number = charCode + 13;
    return String.fromCharCode(baseCode >= rotated ? rotated : rotated - 26);
  })
  ?.split(' ');

const symbolsStr: string = '0123456789ABCDEFGHJKLMNPQRTUVWXY';
const symbolsArr: string[] = symbolsStr?.split('');
const symbolsObj: SymbolsObject = symbolsArr?.reduce(
  (acc: SymbolsObject, c: string, i: number) => {
    acc[c] = i;
    return acc;
  },
  {}
);

const defaults: CouponOptions = {
  parts: 3,
  partLen: 4,
};

// Helper Functions
function randomSymbol(): string {
  return symbolsArr[Math.floor(Math.random() * symbolsArr?.length)];
}

function checkDigitAlg1(data: string, check: number): string {
  // check's initial value is the part number
  data?.split('')?.forEach((v: string) => {
    const k: number = symbolsObj[v];
    check = check * 19 + k;
  });

  return symbolsArr[check % 31];
}

/**
 * Check if a coupon code has a bad word.
 */
export function checkIfCouponCodeHasBadWord(code: string): boolean {
  code = code?.toUpperCase();
  return badWordsList?.some((word: string) => code?.includes(word));
}

// Main Functions
/**
 * Generate a coupon code.
 */
export function generateCouponCode(opts?: Partial<CouponOptions>): string {
  const options: CouponOptions = { ...defaults, ...opts };

  // Validate options
  if (options.parts <= 0 || options.partLen <= 1) {
    throw new Error(
      'Invalid options: parts must be > 0 and partLen must be > 1'
    );
  }

  const parts: string[] = [];
  let part: string;

  // if we have a plaintext, generate a code from that
  if (options.plaintext) {
    throw new Error('Plaintext generation not implemented');
  }

  // default to a random code
  do {
    parts.length = 0;
    for (let i = 0; i < options.parts; i++) {
      part = '';
      for (let j = 0; j < options.partLen - 1; j++) {
        part += randomSymbol();
      }
      part = part + checkDigitAlg1(part, i + 1);
      parts.push(part);
    }
  } while (checkIfCouponCodeHasBadWord(parts?.join('')));

  return parts?.join('-');
}

/**
 * Validate a coupon code.
 */
export function validateCouponCode(
  code: string,
  opts?: Partial<CouponOptions>
): string {
  if (!code) {
    throw new Error('Provide a code to be validated');
  }

  const options: CouponOptions = { ...defaults, ...opts };

  // Validate options
  if (options.parts <= 0 || options.partLen <= 1) {
    throw new Error(
      'Invalid options: parts must be > 0 and partLen must be > 1'
    );
  }

  // uppercase the code, take out any random chars and replace OIZS with 0125
  code = code
    ?.toUpperCase()
    ?.replace(/[^0-9A-Z]+/g, '')
    ?.replace(/O/g, '0')
    ?.replace(/I/g, '1')
    ?.replace(/Z/g, '2')
    ?.replace(/S/g, '5');

  // split in the different parts
  const parts: string[] = [];
  let tmp: string = code;
  while (tmp?.length > 0) {
    parts.push(tmp.slice(0, options.partLen));
    tmp = tmp.slice(options.partLen);
  }

  // make sure we have been given the same number of parts as we are expecting
  if (parts?.length !== options.parts) {
    return '';
  }

  // validate each part
  for (let i = 0; i < parts?.length; i++) {
    const part: string = parts[i];

    // check this part has correct length
    if (part?.length !== options.partLen) {
      return '';
    }

    // split out the data and the check
    const data: string = part.slice(0, options.partLen - 1);
    const check: string = part.slice(options.partLen - 1, 1);

    if (check !== checkDigitAlg1(data, i + 1)) {
      return '';
    }
  }

  // everything looked ok with this code
  return parts?.join('-');
}
