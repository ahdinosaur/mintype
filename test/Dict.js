var test = require('tape')

var types = require('../types')
var is = require('../is')
var dictionary = require('../Dict')
var validate = require('../validate')

test('dictionary is a function', function (t) {
  t.equal(typeof dictionary, 'function')
  t.end()
})

test('dict works with one k v', function (t) {
  var Phones = dictionary(types.String, types.Number)
  t.ok(is(Phones, {piet: 123}))
  t.false(is(Phones, {piet: '123'}))
  t.end()
})

test('dict works with more than one k v', function (t) {
  var Phones = dictionary(types.String, types.Number)
  t.ok(is(Phones, {piet: 123, mikey: 456, mix: 65655}))
  t.false(is(Phones, {piet: 123, mikey: '456', mix: 65655}))
  t.end()
})

test('invalid dict returns a typeerror', function (t) {
  var Phones = dictionary(types.String, types.Number)
  t.false(validate(Phones, {piet: 123, mikey: 456, mix: 65655}))
  t.ok(validate(Phones, {piet: '123', mikey: 456, mix: 65655}))
  t.end()
})

