const id = require('./id')
const stringify = require('./stringify')

module.exports = function typeOf (typeName) {
  if (process.env.NODE_ENV !== 'production') {
    return function (value) {
      return typeof value === typeName
        ? value
        : new TypeError(`expected typeof ${stringify(value)} == ${typeName}`)
    }
  }
  return id
}
