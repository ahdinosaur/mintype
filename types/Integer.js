const AllOf = require('./AllOf')
const NumberType = require('./Number')
const stringify = require('../util/stringify')

module.exports = AllOf([
  NumberType,
  (value) => value % 1 === 0
    ? value
    : new TypeError(`expected ${stringify(value)} % 1 === 0`)
])
