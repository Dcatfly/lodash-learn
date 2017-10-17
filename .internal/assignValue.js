import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/** Used to check objects for own properties. */
const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 * 有点懵逼
 * 如果实例本身有没有key或者obj[key] !== value则做赋值操作
 * 如果value是undefined并且实例的原型链中都没有key 则做赋值操作
 * 但是目测第二个判断是永远不会通过的，，赶紧提个issue。。
 *
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  const objValue = object[key]
  //hasOwnProperty是找实例本身的key，in包括了原型链上的key
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}

export default assignValue
