/**
 * Reorder an array by preferred values. Arrays have to be of the same type.
 * Return source array if there are no preferred values.
 *
 * @export
 * @param {array} sourceArray
 * @param {array} preferredValues
 */
export function sortByPreferred<T>(sourceArray: T[], preferredValues: T[]) {
  if (!preferredValues?.length) {
    return sourceArray;
  }

  return [...preferredValues, ...sourceArray?.filter((x) => !preferredValues?.includes(x))];
}

/**
 * Create number array for specified length
 *
 * @export
 * @param {number} [length=4]
 */
export const arrayFromLength = (length: number = 4) => {
  return Array.from(new Array(length).keys());
};

/**
 * Create string array from Object keys
 *
 * @export
 * @param {(Object | undefined)} source
 */
export function arrayFromKeys(source: Object | undefined) {
  if (!source || !Object.keys(source).length) {
    return [];
  }

  return Object.keys(source);
}

/**
 * Create an array of specified type from Object values.
 *
 * @export
 * @param {(Object | undefined)} source
 */
export function objectValues<T>(source: Object | undefined) {
  if (!source || !Object.keys(source).length) {
    return new Array<T>();
  }

  return Object.values(source) as T[];
}
