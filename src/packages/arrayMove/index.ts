/**
 * Moves an element within an array by mutating the original array
 * @template T The type of elements in the array
 * @param {T[]} array The array to modify
 * @param {number} fromIndex The index to move from
 * @param {number} toIndex The index to move to
 */
export function arrayMoveMutable<T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): void {
  const startIndex: number =
    fromIndex < 0 ? array?.length + fromIndex : fromIndex;

  if (startIndex >= 0 && startIndex < array?.length) {
    const endIndex: number = toIndex < 0 ? array?.length + toIndex : toIndex;
    const [item] = array?.splice(fromIndex, 1);
    array?.splice(endIndex, 0, item);
  }
}

/**
 * Creates a new array with an element moved to a new position
 * @template T The type of elements in the array
 * @param {T[]} array The input array
 * @param {number} fromIndex The index to move from
 * @param {number} toIndex The index to move to
 * @returns {T[]} A new array with the element moved
 */
export function arrayMoveImmutable<T>(
  array: T[],
  fromIndex: number,
  toIndex: number
): T[] {
  const newArray: T[] = [...array];
  arrayMoveMutable(newArray, fromIndex, toIndex);
  return newArray;
}
