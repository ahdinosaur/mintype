const test = require('tape')

const ty = require('../')

test('mintype', function(t) {
  t.ok(ty, 'module is require-able')
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
      ty.Number.is(number),
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
      ty.Number.is(notNumber),
      `${notNumber} is not a number`
    )
  })
  t.end()
})
