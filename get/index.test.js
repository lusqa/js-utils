const get = require('./index')

describe('get', function () {
  it ('When the object has the property received, should return the value of this property', function () {
    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
      }
    }

    const value = get(body, 'person.name')

    expect(value).toBe('Lucas Gomes');
  })

  it ('When the object has not the property received, should return undefined', function () {
    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
      }
    }

    const value = get(body, 'person.gender')

    expect(value).toBeUndefined();
  })
})