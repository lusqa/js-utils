const _ = require('lodash');

/**
 * Verifies if the object has all mandatory fields
 * @param {array} mandatoryFields - The mandatory fields. e.g: ['person', 'person.name', 'person.age']
 * @param {object} body - The object to verify the fields
 * @returns {array} - Returns an array of the missing fields. e.g ['person.name', 'person.age']
 */
module.exports = (mandatoryFields, body) => {
  return mandatoryFields.filter((field) => {
    const splittedField = field.split('.');
    const isObject = splittedField.length > 1;

    if (!isObject) {
      return !body[field]
        ? field
        : undefined;
    }

    const [property, ...path] = splittedField;
    const hasMandatoryField = _.get(body[property], path.join('.'));

    if (!hasMandatoryField) {
      return field;
    }
  });
};