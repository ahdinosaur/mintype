const test = require('tape')

const types = require('../../types')
const is = require('../../is')
const AllOf = require('../../types/AllOf')

test('AllOf is a function', function (t) {
  t.equal(typeof AllOf, 'function')
  t.end()
})

test('AllOf works with one elem in array ', function (t) {
  const oneString = AllOf([
    (value) => value === '1' ? value : new TypeError(`Expected '1', got: ${value}`),
    types.String
  ])
  t.ok(is(oneString, '1'))
  t.false(is(oneString, '2'))
  t.end()
})
