const test = require('tape')

const types = require('../../types')
const is = require('../../is')
const Not = require('../../types/Not')

test('Not is a function', function (t) {
  t.equal(typeof Not, 'function')
  t.end()
})

test('Not works with two elems in array ', function (t) {
  const T = Not([
    types.String,
    types.Number
  ])
  t.false(is(T, 'wee'))
  t.false(is(T, 2))
  t.ok(is(T, {}))
  t.end()
})
