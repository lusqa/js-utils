/**
 * get the value of a property from a value
 * @param {object} object - The object to get the value
 * @param {object} path - The path to access the property
 * @returns {any} - Returns the value from the path or undefined
 */
const get = (object, path) => {
  const splittedPath = path.split('.')

  let value = object
  splittedPath.forEach((property) => {
    const isArrayPath = property.match(/(.*)\[(\d*)\]/)
    if (isArrayPath) {
      const [, subProperty, index] = isArrayPath
      value = value[subProperty][index]
      return
    }

    value = value[property]
  })

  return value
}

module.exports = get
