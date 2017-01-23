var test = require('tape')

var types = require('../types')
var is = require('../is')
var OneOf = require('../OneOf')

test('OneOf is a function', function (t) {
  t.equal(typeof OneOf, 'function')
  t.end()
})

test('OneOf works with two elems in array ', function (t) {
  var T = OneOf([
    types.String,
    value => value === '1' ? value : new TypeError('nope')
  ])
  t.ok(is(T, 'wee'))
  t.false(is(T, '1'))
  t.false(is(T, {}))
  t.end()
})
