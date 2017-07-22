/**
 * A specialized version of `forEach` for arrays.
 * 专门为数组准备的forEach函数
 * 跟自带的forEach相比，这个函数的迭代函数返回false可停止forEach。
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  let index = -1
  const length = array == null ? 0 : array.length

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break
    }
  }
  return array
}

export default arrayEach
