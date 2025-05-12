/**
 * Check for duplicate enum values.
 *
 * @param {object} enumObject - The enum object to check.
 * @param {string} message - The message to display if a duplicate value is found.
 */
const checkForDuplicateEnumValues = (
  enumObject: object,
  message: string = 'Duplicate enumObject value found:'
): void => {
  const values = Object.values(enumObject);
  const uniqueValues = new Set();

  for (const item of values) {
    if (uniqueValues.has(item)) {
      throw new Error(`${message} ${item}, for enumObject: ${enumObject}`);
    }
    uniqueValues.add(item);
  }
};

export { checkForDuplicateEnumValues };
