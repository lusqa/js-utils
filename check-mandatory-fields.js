const _ = require('lodash');

/**
 * Verifies if the object has all mandatory fields
 * @param {array} mandatoryFields - The mandatory fields. e.g: ['person', 'person.name', 'person.age']
 * @param {object} object - The object to verify the fields
 * @returns {array} - Returns an array of the missing fields. e.g ['person.name', 'person.age']
 */
module.exports = (mandatoryFields, object) => {
  const keys = Object.keys(object);

  const missingFields = mandatoryFields.filter((field) => {
    const splittedField = field.split('.');
    const isObject = splittedField.length > 1;

    if (!isObject) {
      if (!keys.includes(field)) {
        return field;
      }
      return;
    }

    const [property, ...path] = splittedField;
    const hasMandatoryField = _.get(object[property], path.join('.'));

    if (!hasMandatoryField) {
      return field;
    }
  });

  return missingFields;
};