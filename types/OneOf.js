const is = require('../is')
const stringify = require('../util/stringify')

module.exports = (types) => (value) =>
  types.filter((type) => is(type, value)).length === 1
    ? value
    : new TypeError(`Expected ${stringify(value)} to be on of ${stringify(types)}`)
