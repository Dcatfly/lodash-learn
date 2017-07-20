/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 * 把arg1数组拆分放进arg0的map中
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  //不直接返回map.set() 因为在IE11中不能链式调用
  map.set(pair[0], pair[1])
  return map
}

export default addMapEntry
