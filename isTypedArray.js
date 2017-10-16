import getTag from './.internal/getTag.js'
import nodeUtil from './.internal/nodeUtil.js'

/** Used to match `toStringTag` values of typed arrays. */
const reTypedTag = /^\[object (?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)\]$/

/* Node.js helper references. */
const nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray

/**
 * Checks if `value` is classified as a typed array.
 * 检测value是否是Array子类型的元素
 * Int8Array; Uint8Array; Uint8ClampedArray; Int16Array; Uint16Array; Int32Array; Uint32Array; Float32Array; Float64Array;
 *
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * isTypedArray(new Uint8Array)
 * // => true
 *
 * isTypedArray([])
 * // => false
 */
const isTypedArray = nodeIsTypedArray
  ? (value) => nodeIsTypedArray(value)
  : (value) => typeof value == 'object' && value !== null && reTypedTag.test(getTag(value))

export default isTypedArray
