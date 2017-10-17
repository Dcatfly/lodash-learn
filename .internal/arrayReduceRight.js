/**
 * A specialized version of `reduceRight` for arrays.
 * 适用于array的reduceRight
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the last element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduceRight(array, iteratee, accumulator, initAccum) {
  let length = array == null ? 0 : array.length
  if (initAccum && length) {
    accumulator = array[--length]
  }
  //跟arrayReduce的反差，，怎么感觉以前好像见过。。
  while (length--) {
    accumulator = iteratee(accumulator, array[length], length, array)
  }
  return accumulator
}

export default arrayReduceRight
