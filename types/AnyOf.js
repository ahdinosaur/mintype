const is = require('../is')
const stringify = require('../util/stringify')

module.exports = (types) => (value) => types.find((type) => is(type, value))
  ? value
  : new TypeError(`Expected ${stringify(value)} to be on of ${stringify(types)}`)
