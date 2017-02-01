const stringify = require('../util/stringify')

module.exports = (value) => Array.isArray(value)
  ? value
  : new TypeError(`expected Array.is(${stringify(value)})`)
