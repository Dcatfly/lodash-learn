/**
 * The base implementation of `isNaN` without support for number objects.
 * isNaN的基础实现，不支持number object
 * 不过为什么说不支持number object？？
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN
