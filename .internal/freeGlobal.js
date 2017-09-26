/** Detect free variable `global` from Node.js. */
//如果是node环境下返回global全局变量？
const freeGlobal = typeof global == 'object' && global !== null && global.Object === Object && global

export default freeGlobal
