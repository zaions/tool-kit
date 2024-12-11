import { DBColumnKeysShortFormEnum } from '@app-enums/firebaseEnum';
import { RequestContentTypeEnum } from '@app-enums/generic';
import { apiConstants } from '@app-utils/constants/generic';
import { getDateFromFrbTimestamp } from '../../../require-package/dayjs';
import { DBItemGenericDataType } from '../../../types/firebaseTypes'; // will need to study this, the absolute import was giving error
import { IGenericObject } from '../../../types/genericTypes';

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

export const isArray = ({
  val,
  checkLength = true,
}: {
  val: any;
  checkLength?: boolean;
}): boolean => {
  if (typeof val === 'object' && Array.isArray(val)) {
    return checkLength ? val.length > 0 : true;
  } else {
    return false;
  }
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

export const getDBTimeColumnValue = (
  item: IGenericObject,
  key: DBColumnKeysShortFormEnum
): string | undefined => {
  const value = item[key];
  if (value) {
    return getDateFromFrbTimestamp(value);
  } else {
    return undefined;
  }
};
