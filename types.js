const compose = require('./compose')
const { typeOf, instanceOf } = require('./util')

const types = {
  String: typeOf('string'),
  Number: typeOf('number'),
  Integer: compose(
    typeOf('number'),
    (value) => value % 1 === 0
      ? value
      : new TypeError(`expected ${value} % 1 === 0`)
  ),
  Boolean: typeOf('boolean'),
  Array: (value) => Array.isArray(value)
    ? value
    : new TypeError(`expected Array.is(${value})`),
  Object: typeOf('object'),
  Function: typeOf('function'),
  RegExp: instanceOf(RegExp),
  Date: instanceOf(Date),
  Error: instanceOf(Error),
  Nil: (value) => value == null
    ? value
    : new TypeError(`expected ${value} == null`),
  Any: value => value
}

module.exports = types
