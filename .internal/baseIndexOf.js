import baseFindIndex from './baseFindIndex.js'
import baseIsNaN from './baseIsNaN.js'
import strictIndexOf from './strictIndexOf.js'

/**
 * The base implementation of `indexOf` without `fromIndex` bounds checks.
 * indexOf的基础实现，没有检测fromIndex是否超出边界的版本
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  //如果value等于自身，那么用strictIndexOf去检测数组是否有值相等就可以了
  //如果不等于自身，说明是NaN，那么用baseFindIndex去检测数组中有没有NaN
  //ES中的indexOf是不能检测NaN的
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex)
}

export default baseIndexOf
