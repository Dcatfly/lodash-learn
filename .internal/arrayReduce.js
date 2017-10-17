/**
 * A specialized version of `reduce` for arrays.
 * 专门为array准备的reduce方法
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator 累加者] The initial value. 初始值
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value. 指定array的第一个元素做初始值
 *  为什么不用accumulator做判断呢？
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  let index = -1
  const length = array == null ? 0 : array.length

  if (initAccum && length) {
    accumulator = array[++index]
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array)
  }
  return accumulator
}

export default arrayReduce
