const test = require('tape')

const types = require('../../types')
const is = require('../../is')
const OneOf = require('../../types/OneOf')

test('OneOf is a function', function (t) {
  t.equal(typeof OneOf, 'function')
  t.end()
})

test('OneOf works with two elems in array ', function (t) {
  const T = OneOf([
    types.String,
    value => value === '1' ? value : new TypeError('nope')
  ])
  t.ok(is(T, 'wee'))
  t.false(is(T, '1'))
  t.false(is(T, {}))
  t.end()
})
