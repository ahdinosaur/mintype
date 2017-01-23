var is = require('./is')

module.exports = (types) => (value) =>
  types.filter((type) => is(type, value)).length === 1
    ? value
    : new TypeError(`Expected ${value} to be on of ${types}`)
