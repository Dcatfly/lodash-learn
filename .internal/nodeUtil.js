import freeGlobal from './freeGlobal.js'

/** Detect free variable `exports`. */
const freeExports = typeof exports == 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module == 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Detect free variable `process` from Node.js. */
const freeProcess = moduleExports && freeGlobal.process

/** Used to access faster Node.js helpers. */
const nodeUtil = ((() => {
  try {
    //process.binding('util') 引入内部模块？还有这种操作？？不太记得了。。
    return freeProcess && freeProcess.binding && freeProcess.binding('util')
  } catch (e) {}
})())

export default nodeUtil
