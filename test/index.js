const test = require('tape')

const type = require('../')

test('simple-type', function(t) {
  t.ok(type, 'module is require-able')
  t.end()
})

test('numbers', function(t) {
  const numbers = [
    0,
    -0,
    1,
    100,
    NaN
  ]
  numbers.forEach((number) => {
    t.ok(
      type.Number.is(number),
      `${number} is a number`
    )
  })
  const notNumbers = [
    'a',
    [],
    {}
  ]
  notNumbers.forEach((notNumber) => {
    t.notOk(
      type.Number.is(notNumber),
      `${notNumber} is not a number`
    )
  })
  t.end()
})
