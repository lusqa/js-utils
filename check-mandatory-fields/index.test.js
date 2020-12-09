const checkMandatoryFields = require('./index')

describe('checkMandatoryFields', function () {
  it ('When the body object has all mandatory fields, should return an empty array', function () {
    const mandatoryFields = [
      'person',
      'person.name',
      'person.age',
      'person.address.street',
      'person.address.number',
    ];

    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
        address: {
          street: 'Amphitheatre Pkwy',
          number: '1600',
        }
      }
    }

    const missingFields = checkMandatoryFields(mandatoryFields, body)

    expect(missingFields.length).toBe(0);
  })

  it ('When the body object has not all mandatory fields, should return an array of the missing fields', function () {
    const mandatoryFields = [
      'person',
      'person.name',
      'person.age',
      'person.address.street',
      'person.address.number',
    ];

    const body = {
      person: {
        age: '19',
        address: {
          number: '1600',
        }
      }
    }

    const missingFields = checkMandatoryFields(mandatoryFields, body)

    expect(missingFields.length).toBe(2);
    expect(missingFields).toStrictEqual(['person.name', 'person.address.street']);
  })
})