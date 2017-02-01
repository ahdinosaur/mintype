const test = require('tape')

const types = require('../../types')
const is = require('../../is')
const AnyOf = require('../../types/AnyOf')

test('AnyOf is a function', function (t) {
  t.equal(typeof AnyOf, 'function')
  t.end()
})

test('AnyOf works with one elem in array ', function (t) {
  const anyString = AnyOf([types.String])
  t.ok(is(anyString, 'wee'))
  t.false(is(anyString, 1))
  t.end()
})

test('AnyOf works with two elems in array ', function (t) {
  const anyString = AnyOf([types.String, types.Number])
  t.ok(is(anyString, 'wee'))
  t.ok(is(anyString, 1))
  t.false(is(anyString, {}))
  t.end()
})
