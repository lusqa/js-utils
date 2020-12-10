/**
 * get the value of a property from a value
 * @param {object} object - The object to get the value
 * @param {object} path - The path to access the property
 * @returns {any} - Returns the value from the path or undefined
 */
const get = (object, path) => {
  const splittedPath = path.split('.')
  const [property, ...remainingPath] = splittedPath

  const isObjectPath = splittedPath.length > 1
  if (!isObjectPath) {
    return object[property]
  }

  let value = object
  value = get(value[property], remainingPath.join('.'))

  return value
}

module.exports = get
