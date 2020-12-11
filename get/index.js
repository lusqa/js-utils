/**
 * get the value of a property from a value
 * @param {object} object - The object to get the value
 * @param {object} path - The path to access the property
 * @returns {any} - Returns the value from the path or undefined
 */
module.exports = (object, path) => {
  const splittedPath = path.split('.')

  return splittedPath.reduce((acc, curr) => {
    const isArrayPath = curr.match(/(.*)\[(\d*)\]/)
    if (isArrayPath) {
      const [, subProperty, index] = isArrayPath
      return acc[subProperty][index]
    }
    return acc[curr]
  }, object)
}
