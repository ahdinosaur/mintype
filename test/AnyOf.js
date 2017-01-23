var test = require('tape')

var types = require('../types')
var is = require('../is')
var AnyOf = require('../AnyOf')

test('AnyOf is a function', function (t) {
  t.equal(typeof AnyOf, 'function')
  t.end()
})

test('AnyOf works with one elem in array ', function (t) {
  var anyString = AnyOf([types.String])
  t.ok(is(anyString, 'wee'))
  t.false(is(anyString, 1))
  t.end()
})

test('AnyOf works with two elems in array ', function (t) {
  var anyString = AnyOf([types.String, types.Number])
  t.ok(is(anyString, 'wee'))
  t.ok(is(anyString, 1))
  t.false(is(anyString, {}))
  t.end()
})
