/**
 * A specialized version of `forEachRight` for arrays.
 * 专门为数组准备的forEachRight函数，从数组最后一个元素往第一个元素迭代，同样返回false停止迭代
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEachRight(array, iteratee) {
  let length = array == null ? 0 : array.length

  while (length--) {
    if (iteratee(array[length], length, array) === false) {
      break
    }
  }
  return array
}

export default arrayEachRight
