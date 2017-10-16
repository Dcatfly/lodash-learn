import root from './.internal/root.js'

/** Detect free variable `exports`. */
//探测exports是否存在 并赋值给freeExports 不过实测node&borwser中exports都是undefined啊
const freeExports = typeof exports == 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
//在exports存在的情况下 探测module并赋值给freeModule
const freeModule = freeExports && typeof module == 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
//判断是否存在module.exports
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. */
//似乎是通过module.exports来确定环境 继而确定宿主环境有没有Buffer
const Buffer = moduleExports ? root.Buffer : undefined

/* Built-in method references for those with the same name as other `lodash` methods. */
//原生的Buffer.isBuffer方法
const nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined

/**
 * Checks if `value` is a buffer.
 *
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * isBuffer(new Buffer(2))
 * // => true
 *
 * isBuffer(new Uint8Array(2))
 * // => false
 */
const isBuffer = nativeIsBuffer || (() => false)

export default isBuffer
