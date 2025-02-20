import { DBColumnKeysShortFormEnum } from '@app-enums/firebaseEnum';
import { RequestContentTypeEnum } from '@app-enums/generic';
import {
  allowedImageTypes,
  apiConstants,
  svgIconTypes,
} from '@app-utils/constants/generic';
import { getDateFromFrbTimestamp } from '../../../require-package/dayjs';
import { DBItemGenericDataType } from '../../../types/firebaseTypes'; // will need to study this, the absolute import was giving error
import {
  IGenericObject,
  IPaginationOptions,
} from '../../../types/genericTypes';

/**
 * Generates a unique random key.
 *
 * @returns {string} A unique random key.
 */
export const getZUniqueKey = (): string => {
  // Get the current timestamp and convert it to a base-36 string
  const head = Date.now().toString(36);

  // Generate a random number, convert it to a base-36 string, and remove the leading "0."
  const tail = Math.random().toString(36).substr(2);

  // Concatenate the timestamp string and the random string, and return it
  return head + tail;
};

/**
 * A utility function that logs a message and returns void.
 */
export const emptyVoidReturnFunction = (): void => {
  // eslint-disable-next-line no-console
  console.info({ message: 'emptyVoidReturnFunction' });
};

/**
 * A utility function that logs a message and returns a void Promise.
 */
export const emptyVoidReturnFunctionPromise = async (): Promise<void> => {
  // eslint-disable-next-line no-console
  console.info({ message: 'emptyVoidReturnFunction' });
};

/**
 * Serializes an object to a JSON-formatted string.
 *
 * @param _data - The data to be stringified.
 * @returns The JSON-formatted string.
 * To parsed JSON, use zJsonParse helper function
 */
export const zStringify = (_data: unknown): string => {
  return JSON.stringify(_data);
};

/**
 * Parses a JSON-formatted string into an object of the specified type.
 *
 * @param _data - The JSON-formatted string to be parsed.
 * @returns The parsed object, or undefined if parsing fails.
 * To stringify JSON, use the zStringify helper function.
 */
export const zJsonParse = <T>(_data: string): T | undefined => {
  try {
    return JSON.parse(_data) as T;
  } catch (error) {
    return undefined;
  }
};

/**
 * Checks if the given value is a non-empty string.
 *
 * @param value - The string value to be checked.
 * @returns A boolean indicating whether the string is non-empty or not.
 */
export const isZNonEmptyString = (
  value: string | undefined | null
): boolean => {
  return value !== undefined && value !== null && value?.trim()?.length > 0;
};

/**
 * Checks if all the values in the given array are non-empty strings.
 *
 * @param values - An array of string values to be checked.
 * @returns A boolean indicating whether all strings in the array are non-empty or not.
 */
export const isZNonEmptyStrings = (
  values: Array<string | undefined | null>
): boolean => {
  const _result = values.every((_value) => isZNonEmptyString(_value));

  return _result;
};

/**
 * Checks if the given value is a valid number.
 *
 * @param value - The value to be checked. Can be number, string, undefined, or null.
 * @param checkPositive - Optional parameter. If true, the function will also check if the value is a positive number.
 * @returns A boolean indicating whether the value is a valid number (and optionally a positive number).
 */
export const isZValidNumber = (
  value: number | string | undefined | null,
  checkPositive: boolean = false
): boolean => {
  const numberValue = Number(value);
  const isValidNumber = !isNaN(numberValue);

  if (!isValidNumber) return false;
  if (checkPositive) {
    return numberValue > 0;
  }
  return true;
};

/**
 * Checks if all the values in the given array are valid numbers.
 *
 * @param values - An array of values (number, string, undefined, or null) to be checked.
 * @param checkPositive - Optional parameter. If true, the function will also check if all values are positive numbers.
 * @returns A boolean indicating whether all values in the array are valid numbers (and optionally positive numbers).
 */
export const isZValidNumbers = (
  values: Array<number | string | undefined | null>,
  checkPositive: boolean = false
): boolean => {
  return values.every((value) => isZValidNumber(value, checkPositive));
};

/**
 * Converts a string to title case by adding spaces between lowercase and uppercase letters and converting to lowercase.
 *
 * @param s - The input string.
 * @returns The title case string.
 */
export const convertToTitleCase = (s: string): string => {
  // return s.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
  //   c ? (c as string).toUpperCase() : ' ' + (d as string).toUpperCase()
  // );
  return s
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between lowercase and uppercase letters
    .toLowerCase(); // Convert the string to lowercase
};

export const convertToTitleCaseV1 = (s: string): string => {
  return isStringVariable(s)
    ? s.replace(/^_*(.)|_+(.)/g, (_, a, b) => {
        return a ? a.toUpperCase() : ' ' + b.toUpperCase();
      })
    : s;
};

/**
 * Calculates the total number of pages based on the total number of items and items per page.
 * @param total The total number of items.
 * @param perPage The number of items per page.
 * @returns The total number of pages.
 */
export const ZTotalPages = (total: number, perPage: number): number => {
  if (total > 0 && perPage > 0) {
    return Math.ceil(total / perPage);
  }
  return 0;
};

/**
 * Converts an image URL to a base64-encoded string.
 *
 * @param imageUrl - The URL of the image to convert.
 * @returns A Promise that resolves with the base64-encoded string of the image.
 */
export const imageUrlToBase64 = async (
  url?: string,
  authToken?: string
): Promise<string> => {
  try {
    if (url !== undefined && isZNonEmptyString(url)) {
      // Getting authToken from Storage.
      const headers = new Headers({
        'Content-Type': RequestContentTypeEnum.Json,
        Authorization: `${apiConstants.authorizationTokenType.bearer} ${
          authToken ?? ''
        }`,
        // Add other headers as needed
      });
      const request = new Request(url, {
        method: 'GET',
        headers,
      });

      const response = await fetch(request);
      if (!response.ok) {
        throw new Error(`Failed to fetch image. Status: ${response.status}`);
      }
      const blob = await response.blob();
      const data = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result);
        };
        reader.onerror = (error) => {
          reject(error);
        };
        reader.readAsDataURL(blob);
      });

      return data as string;
    }
    return '';
  } catch (error) {
    console.error('Error fetching or converting image:', error);
    return '';
  }
};

/**
 * Replaces dynamic parts in a URL with corresponding values.
 * @param {string} url - The base URL string with dynamic parts.
 * @param {string[]} itemsId - An array of strings representing the dynamic parts to replace.
 * @param {string[]} urlDynamicParts - An array of strings representing the values to replace the dynamic parts.
 * @returns {string} The URL with dynamic parts replaced.
 */
export const replaceUrlDynamicParts = ({
  url,
  itemsId,
  urlDynamicParts,
}: {
  url: string;
  itemsId: Array<number | string>;
  urlDynamicParts: Array<number | string>;
}): string => {
  if (itemsId?.length !== urlDynamicParts?.length) {
    throw new Error('itemsId and urlDynamicParts must have the same length.');
  }
  let resultUrl = url;

  for (let i = 0; i < urlDynamicParts?.length; i++) {
    const dynamicPart = String(urlDynamicParts[i]);
    if (String(resultUrl).includes(dynamicPart)) {
      const itemId = String(itemsId[i]);
      resultUrl = String(resultUrl).replace(dynamicPart, itemId);
    }
  }

  return resultUrl;
};

/**
 * Converts a string to a boolean value.
 * @param {string | boolean} value - The value to convert to a boolean.
 * @returns {boolean} The converted boolean value.
 */
export const zConvertToBoolean = (value?: string | boolean): boolean => {
  switch (value) {
    case 'true':
      return true;
    case 'false':
      return false;
    default:
      return Boolean(value); // handles other cases, like non-string inputs
  }
};

/** used for referral code right now */
export const generateUniqueCode = (length: number = 6): string => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters[randomIndex];
  }
  return code.toLowerCase();
};

export const isNullOrUndefined = (value: any): boolean => {
  return value === null || value === undefined;
};

export const isNotNullOrUndefined = (value: any): boolean => {
  return !isNullOrUndefined(value);
};

export const dumpValueNoLogNothing = (..._: any): void => {};

export const isArray = (arr: unknown, checkLength = false): boolean => {
  const typeIsArray = isObject(arr, false) && Array.isArray(arr);
  if (!checkLength) return typeIsArray;
  else return typeIsArray && !!arr.length;
};

export const isSoftDeleted = ({
  item,
}: {
  item: DBItemGenericDataType;
}): boolean => {
  return typeof item[DBColumnKeysShortFormEnum.deletedAt] === 'number';
};

export const dbItemIsBlocked = ({
  item,
}: {
  item: DBItemGenericDataType;
}): boolean => {
  return typeof item[DBColumnKeysShortFormEnum.blockedAt] === 'number';
};

export const getDBTimeColumnValue = ({
  key,
  item,
}: {
  item?: IGenericObject;
  key: DBColumnKeysShortFormEnum;
}): string | undefined => {
  const value = item?.[key];
  if (value) {
    return getDateFromFrbTimestamp(value);
  } else {
    return undefined;
  }
};

export const addUrlProtocolHandler = (
  url: string,
  isLocalhost: boolean
): string => {
  if (url.search(/^http[s]?:\/\//) === -1) {
    url = (isLocalhost ? 'http://' : 'https://') + url;
    return url;
  } else return url;
};

// check if given object contains key/value pairs or empty
export const isObject = (obj: unknown, checkKeys = true): boolean => {
  const typeIsObject =
    typeof obj === 'object' && obj != null && typeof obj !== 'undefined';
  if (!checkKeys) return typeIsObject;
  else return typeIsObject && !!Object.keys(obj).length;
};

export const buildFilterObject = (
  filter: Record<string, unknown>
): Record<string, unknown> => {
  if (!isObject(filter)) return {};

  const result: Record<string, unknown> = {};

  for (const key in filter) {
    result.field = key;
    result.values = filter[key];
  }

  return isArray(result.values) ? result : {};
};

export const getActiveFilters = <T = unknown>(
  field: string,
  filter: { field?: string; values?: T }
): T | [] => {
  if (filter?.field === field) {
    return filter.values ?? [];
  }

  return [];
};

export const isValidUrl = (url: string): boolean => {
  const re = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+#]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+#=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return re.test(url);
};

export const isValidVanityUrl = ({
  domain,
  url,
}: {
  url: string;
  domain: string;
}): boolean => {
  const lowercaseUrl = url.trim().toLowerCase();
  if (lowercaseUrl === 'www' || lowercaseUrl === domain) {
    return false;
  }

  const re = /^((?!.*[-]{2})(?=.*[a-z0-9]$)[a-z0-9][a-z0-9-]*$)+/;
  return re.test(url);
};

export const containSpecialCharacters = (text: string): boolean => {
  const re = /[^A-Za-z0-9&,'"”“’‘\-(){} ]+/;
  return re.test(text);
};

export const generateSlug = (text: String): string => {
  const result =
    text &&
    text
      .toLowerCase()
      .replace(/&+/g, 'and')
      .replace(/(){}/g, '')
      .replace(/,/g, '')
      .replace(/'/g, '')
      .replace(/"/g, '')
      .replace(/”/g, '')
      .replace(/“/g, '')
      .replace(/’/g, '')
      .replace(/‘/g, '')
      .replace(/[^\w ]+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()
      .replace(/ +/g, '-');
  return result;
};

export const getImageBase64Url = (file: File): Promise<unknown> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const containQueryParams = (url: string): boolean | '' => {
  const queryParams = ['?', '&', '#'];
  return url && queryParams.some((param) => url.includes(param));
};

export const getObjectKey = (
  obj: any,
  key: string,
  defaultValue: any = null,
  checkNull: boolean = true
): any => {
  if (checkIfKeyExists(obj, key, checkNull)) {
    return obj[key];
  } else {
    return defaultValue;
  }
};

export const checkIfKeyExists = (
  obj: Record<string, unknown>,
  key: string,
  checkNull = false
): boolean => {
  if (
    isObject(obj, true) &&
    Object.hasOwnProperty.call(obj, key) &&
    obj[key] !== undefined
  ) {
    return checkNull ? obj[key] !== null : true;
  }
  return false;
};

export const isEqual = (x: any, y: any): boolean => {
  if (x === y) return true;
  // if both x and y are null or undefined and exactly the same

  if (!(x instanceof Object) || !(y instanceof Object)) return false;
  // if they are not strictly equal, they both need to be Objects

  if (x.constructor !== y.constructor) return false;
  // they must have the exact same prototype chain, the closest we can do is
  // test there constructor.

  for (const p in x) {
    if (!Object.hasOwnProperty.call(x, p)) continue;
    // other properties were tested using x.constructor === y.constructor

    if (!Object.hasOwnProperty.call(y, p)) return false;
    // allows to compare x[p] and y[p] when set to undefined

    if (x[p] === y[p]) continue;
    // if they have the same strict value or identity then they are equal

    if (typeof x[p] !== 'object') return false;
    // Numbers, Strings, Functions, Booleans must be strictly equal

    if (!isEqual(x[p], y[p])) return false;
    // Objects and Arrays must be tested recursively
  }

  for (const p in y) {
    if (Object.hasOwnProperty.call(y, p) && !Object.hasOwnProperty.call(x, p)) {
      return false;
    }
  }
  // allows x[p] to be set to undefined

  return true;
};

export const toRad = (Value: number): number => {
  return (Value * Math.PI) / 180;
};

// calculate distance
export const calcCrow = (
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number
): number => {
  const R = 6371; // km
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lng2 - lng1);
  lat1 = toRad(lat1);
  lat2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export const truncateString = (text: string, length: number = 10): string => {
  if (!text) return '';
  return text?.length > length
    ? `${text?.slice(0, length) ?? ''}...`
    : text ?? '';
};

export const detectDeviceAndViewMode = (): {
  webkitVer: number;
  isGoogle: boolean | 0;
  isAndroid: boolean | 0;
  androidDesktopMode: boolean | 0;
} => {
  const match = /WebKit\/([0-9]+)|$/.exec(navigator.appVersion);
  const webkitVer = match ? parseInt(match[1], 10) : 0; // also matches AppleWebKit
  const isGoogle = webkitVer && navigator.vendor.indexOf('Google') === 0; // Also true for Opera Mobile and maybe others
  const isAndroid = isGoogle && navigator.userAgent.indexOf('Android') > 0; // Careful - Firefox and Windows Mobile also have Android in user agent
  const androidDesktopMode =
    !isAndroid &&
    isGoogle &&
    navigator.platform.indexOf('Linux') === 0 &&
    'ontouchstart' in document.documentElement;

  return { webkitVer, isGoogle, isAndroid, androidDesktopMode };
};

export const checkEqualityOfTwoArray = (
  arrOne: Array<unknown>,
  arrTwo: Array<unknown>
): boolean => {
  const result = arrOne.every((element) => {
    return arrTwo.includes(element);
  });
  return result;
};

export const isFileTypeAllowed = (file: File, type = 'svg'): boolean => {
  if (type === 'svg') {
    return svgIconTypes.includes(file.type.toLowerCase());
  } else if (type === 'other') {
    return allowedImageTypes.includes(file.type.toLowerCase());
  }
  return false;
};

export const getImageDimensions = async (
  file: File
): Promise<{ width: number; height: number } | null> => {
  if (!file) return null;

  return await new Promise((resolve) => {
    const img = document.createElement('img');
    const objectUrl = window.URL.createObjectURL(file);
    let height: number, width: number;

    img.onload = function (event: Event) {
      const imageElement = event?.target as HTMLImageElement;
      height = imageElement.naturalHeight;
      width = imageElement.naturalWidth;
      URL.revokeObjectURL(objectUrl);

      resolve({ width, height });
    };

    img.src = objectUrl;
  });
};

export const getImageAspectRatio = (
  width: number,
  height: number
): number[] | null => {
  // return type (aspect ratio with [width, height] [1,1])
  if (width === height) {
    return [1, 1];
  } else if (width > height) {
    return [Math.round(width / height), Math.round(height / height)];
  } else if (width < height) {
    return [Math.round(width / width), Math.round(height / width)];
  } else {
    return null;
  }
};

export const checkVariableType = (val: unknown, type = 'string'): boolean => {
  switch (type) {
    case 'string':
      return typeof val === 'string' && typeof val !== 'undefined';
    case 'number':
      return typeof val === 'number' && typeof val !== 'undefined';
    case 'boolean':
      return typeof val === 'boolean' && typeof val !== 'undefined';
    case 'object':
      return isObject(val, true);
    case 'array':
      return isArray(val, true);
    case 'function':
      return typeof val === 'function' && typeof val !== 'undefined';
    case 'undefined':
      return typeof val === 'undefined';
    default:
      return false;
  }
};

export const isStringVariable = (val?: unknown): boolean => {
  return checkVariableType(val, 'string');
};

export const isFunction = (val: unknown): boolean => {
  return checkVariableType(val, 'function');
};

export const imageTypeAllowed = (file: any): boolean => {
  return allowedImageTypes.includes(file?.type?.toLowerCase());
};

export const validateFileBeforeUpload = ({
  file,
  sizeLimit,
}: {
  file: File;
  sizeLimit: number;
}): { status: string; type: string } => {
  // check file size
  const fileSize = parseFloat(`${file.size / 1024 / 1024}`) > sizeLimit;

  // show warning alert
  if (fileSize) return { status: 'error', type: 'FILE_SIZE_LIMIT' } as const;

  // check if selected file is valid
  const allowed = imageTypeAllowed(file);

  // show warning alert
  if (!allowed) return { status: 'error', type: 'INVALID_FILE_TYPE' } as const;

  return { status: 'success', type: 'SUCCESS' } as const;
};

export const isValidEmail = (email: string): boolean | '' => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && re.test(String(email).toLowerCase());
};

export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const flattenArray = <T>(arr: any[]): T[] => {
  return arr.reduce((flat: T[], item: any) => {
    return flat.concat(Array.isArray(item) ? flattenArray<T>(item) : item);
  }, []);
};

/**
 * Normalizes a type string to match a given enum value.
 * Handles case-insensitive matching.
 *
 * @template T Enum type
 * @param {string} type - The type string to normalize
 * @param {T} enumObject - The enum to match against
 * @returns {T[keyof T] | null} The matched enum value or null if no match
 */
export const normalizeEnumValue = <T extends Record<string, string | number>>(
  type: string,
  enumObject: T
): T[keyof T] | null => {
  const normalizedType = type?.toLowerCase();
  const matchedEntry = Object.entries(enumObject).find(
    ([_, value]) => String(value).toLowerCase() === normalizedType
  );
  return matchedEntry ? (matchedEntry[1] as T[keyof T]) : null;
};

export const isFileTypeValid = (
  filename: string,
  filetype: string | RegExp
): boolean => {
  const pattern =
    typeof filetype === 'string' ? new RegExp(filetype) : filetype;
  return pattern.test(filename);
};

export const getTextOnly = (text: string): string => {
  return (
    text &&
    text
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .trim()
      .replace(/ +/g, '')
  );
};

export const getPaginationParams = (
  pagination: IPaginationOptions
): {
  offset: number;
  limit: number;
} => {
  let offset = 0;
  let limit = 10;

  if (pagination) {
    offset = pagination?.offset ?? offset;
    limit = pagination?.limit ?? limit;
  }

  return { offset, limit };
};

export const createRegexMatch = (
  searchQuery = ''
): {
  $regex: RegExp;
} => {
  return {
    $regex: new RegExp(searchQuery.trim().toLowerCase(), 'i'),
  };
};

export const formatUSD = (stripeAmount: number) => {
  return `$${(stripeAmount / 100).toFixed(2)}`;
};

export const formatStripeAmount = (USDString: string): number => {
  return parseFloat(USDString) * 100;
};

/**
 * Removes leading and trailing backslashes from a given string.
 *
 * @param input - The input string to process.
 * @returns The modified string with leading and trailing backslashes removed.
 */
export const removeLeadingTrailingBackslash = (input: string): string => {
  return input.replace(/^\\|\\$/g, '');
};
