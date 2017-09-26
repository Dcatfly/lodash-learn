import freeGlobal from './freeGlobal.js'

/** Detect free variable `self`. */
const freeSelf = typeof self == 'object' && self !== null && self.Object === Object && self

/** Used as a reference to the global object. */
//额。。指向当前作用域的根节点？可能是node中的global或者浏览器中的window或者this
const root = freeGlobal || freeSelf || Function('return this')()

export default root
