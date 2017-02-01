const stringify = require('../util/stringify')

module.exports = (value) => value == null
  ? value
  : new TypeError(`expected ${stringify(value)} == null`)
