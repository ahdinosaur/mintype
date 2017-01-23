var test = require('tape')

var types = require('../types')
var is = require('../is')
var Not = require('../Not')

test('Not is a function', function (t) {
  t.equal(typeof Not, 'function')
  t.end()
})

test('Not works with two elems in array ', function (t) {
  var T = Not([
    types.String,
    types.Number
  ])
  t.false(is(T, 'wee'))
  t.false(is(T, 2))
  t.ok(is(T, {}))
  t.end()
})
