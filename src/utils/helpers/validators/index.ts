/**
 * Validates an email address.
 * @param {string} email - The email address to validate.
 * @returns {boolean} - Returns `true` if the email is valid; otherwise, `false`.
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates a URL.
 * @param {string} url - The URL to validate.
 * @returns {boolean} - Returns `true` if the URL is valid; otherwise, `false`.
 */
export const validateURL = (url: string): boolean => {
  const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  return urlRegex.test(url);
};

/**
 * Validates a phone number.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} - Returns `true` if the phone number is valid; otherwise, `false`.
 */
export const validatePhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneRegex.test(phone);
};
