import baseAssignValue from './baseAssignValue.js'
import eq from '../eq.js'

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 * 如果object[key]存在，不合并undefined的assignValue？？
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  //1、value不是undefined并且和object[key]不相等
  //2、value是undefined并且key不在object中
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value)
  }
}

export default assignMergeValue
