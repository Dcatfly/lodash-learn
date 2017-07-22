/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 * 将值放入set
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  //set.add在IE11中不支持链式调用
  set.add(value)
  return set
}

export default addSetEntry
