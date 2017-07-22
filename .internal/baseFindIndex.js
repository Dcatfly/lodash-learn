/**
 * The base implementation of `findIndex` and `findLastIndex`.
 * 关于findIndex和findLastIndex的简单实现
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration. 做断言的函数
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  const { length } = array
  //根据是否fromRight做两种遍历规则
  let index = fromIndex + (fromRight ? 1 : -1)

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index
    }
  }
  return -1
}

export default baseFindIndex
