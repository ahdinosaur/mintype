var is = require('./is')

module.exports = (types) => (value) => types.find((type) => is(type, value))
  ? value
  : new TypeError(`Expected ${value} to be on of ${types}`)
