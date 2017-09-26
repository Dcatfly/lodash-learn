const objectProto = Object.prototype
const hasOwnProperty = objectProto.hasOwnProperty
const toString = objectProto.toString
const symToStringTag = typeof Symbol != 'undefined' ? Symbol.toStringTag : undefined

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 * 没有错误环境下回退方案的getTag方法的基本实现
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  //判断如果没有Symbol.toStringTag时直接调用toString
  if (!(symToStringTag && symToStringTag in Object(value))) {
    return toString.call(value)
  }
  //判断symToStringTag是继承的还是自身就有的
  const isOwn = hasOwnProperty.call(value, symToStringTag)
  const tag = value[symToStringTag]
  let unmasked = false
  try {
    value[symToStringTag] = undefined
    unmasked = true
  } catch (e) {}
  //如果symToStringTag是自身就有的，那么置为undefined，使其调用继承的
  const result = toString.call(value)
  //恢复原本的状态
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag
    } else {
      delete value[symToStringTag]
    }
  }
  return result
}

export default baseGetTag

//testing
let _t = new Object()
console.log(baseGetTag(_t))
_t[Symbol.toStringTag] = 'test'
console.log(_t.toString())
console.log(baseGetTag(_t))