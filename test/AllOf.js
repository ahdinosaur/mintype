var test = require('tape')

var AllOf = require('../AllOf')
var types = require('../types')
var is = require('../is')

test('AllOf is a function', function (t) {
  t.equal(typeof AllOf, 'function')
  t.end()
})

test('AllOf works with one elem in array ', function (t) {
  var oneString = AllOf([
    (value) => value === '1' ? value : new TypeError(`Expected '1', got: ${value}`),
    types.String
  ])
  t.ok(is(oneString, '1'))
  t.false(is(oneString, '2'))
  t.end()
})
