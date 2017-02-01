const id = require('./id')
const stringify = require('./stringify')

module.exports = function instanceOf (Ctor) {
  if (process.env.NODE_ENV !== 'production') {
    return function (value) {
      return value instanceof Ctor
        ? value
        : new TypeError(`expected ${stringify(value)} instanceof ${Ctor.name}`)
    }
  }
  return id
}
