/**
 * A specialized version of `indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 * 基于严格相等的（===）indexOf
 * 好奇怪，indexOf函数本身就是严格相等的啊，，[NaN].indexOf(NaN)是-1啊
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  let index = fromIndex - 1
  const { length } = array

  while (++index < length) {
    if (array[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf
