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
