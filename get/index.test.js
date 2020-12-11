const get = require('./index')

describe('get', () => {
  it('When the object has the property received, should return the value of this property', () => {
    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
      },
    }

    const value = get(body, 'person.name')

    expect(value).toBe('Lucas Gomes')
  })

  it('When the path it\'s an array and it has the property received, should return undefined', () => {
    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
        phones: ['85990766571', '8530326712'],
      },
    }

    const value = get(body, 'person.phones[1]')

    expect(value).toBe('8530326712')
  })

  it('When the object has not the property received, should return undefined', () => {
    const body = {
      person: {
        name: 'Lucas Gomes',
        age: '19',
      },
    }

    const value = get(body, 'person.gender')

    expect(value).toBeUndefined()
  })
})
