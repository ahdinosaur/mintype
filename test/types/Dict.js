const test = require('tape')

const types = require('../../types')
const is = require('../../is')
const validate = require('../../validate')
const Dictionary = require('../../types/Dict')

test('Dictionary is a function', function (t) {
  t.equal(typeof Dictionary, 'function')
  t.end()
})

test('Dict works with one k v', function (t) {
  const Phones = Dictionary(types.String, types.Number)
  t.ok(is(Phones, {piet: 123}))
  t.false(is(Phones, {piet: '123'}))
  t.end()
})

test('Dict works with more than one k v', function (t) {
  const Phones = Dictionary(types.String, types.Number)
  t.ok(is(Phones, {piet: 123, mikey: 456, mix: 65655}))
  t.false(is(Phones, {piet: 123, mikey: '456', mix: 65655}))
  t.end()
})

test('invalid Dict returns a TypeError', function (t) {
  const Phones = Dictionary(types.String, types.Number)
  t.false(validate(Phones, {piet: 123, mikey: 456, mix: 65655}))
  t.ok(validate(Phones, {piet: '123', mikey: 456, mix: 65655}))
  t.end()
})

