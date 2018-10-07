/**
 * @function immutableSplice
 * @param {Array} arr - Array of existing items
 * @param {number} start - insert index position
 * @param {number} deleteCount - number of items to delete
 * @param  {...any} items - items to add
 */

export const immutableSplice = (arr, start, deleteCount, ...items) => {
  return [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount),];
};
