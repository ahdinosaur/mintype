const compose = require('./compose')
const { typeOf, instanceOf } = require('./util')

const types = {
  String: typeOf('string'),
  Number: typeOf('number'),
  Integer: compose(
    typeOf('string'),
    (value) => value % 1 === 0 ? value
      : new Error(`expected ${value} % 1 === 0`)
      ),
  Boolean: typeOf('boolean'),
  Array: (value) => Array.is ? value
    : new Error(`expected Array.is(${value})`)
  ,
  Object: typeOf('object'),
  Function: typeOf('function'),
  Error: instanceOf(Error),
  RegExp: instanceOf(RegExp),
  Date: instanceOf(Date),
  Nil: (value) => value == null ? value
    : new Error(`expected ${value} == null`)
  ,
  Any: value => value
}

module.exports = types
