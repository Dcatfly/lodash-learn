/** Used as references for various `Number` constants. */
//最大的安全整数 也就是js的最大精度 2^53 不过这里怎么减1了呢
// 哦哦 Number.MAX_SAFE_INTEGER也是这个值。。
const MAX_SAFE_INTEGER = 9007199254740991

/** Used to detect unsigned integer values. */
//0、1、2、3、4...10、11、12...
const reIsUint = /^(?:0|[1-9]\d*)$/

/**
 * Checks if `value` is a valid array-like index.
 * 检测value是否类似于array的index？？也就是非负自然整数。。
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  const type = typeof value
  length = length == null ? MAX_SAFE_INTEGER : length

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length)
}

export default isIndex