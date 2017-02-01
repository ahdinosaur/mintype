const test = require('tape')

const ty = require('../../')

const maybe = ty.Maybe

test('maybe is a function', function (t) {
  t.equal(typeof maybe, 'function')
  t.end()
})

test('maybe returns a function', function (t) {
  t.equal(typeof maybe(ty.String), 'function')
  t.end()
})

test('maybe works', function (t) {
  const maybeString = maybe(ty.String)
  t.ok(ty.is(maybeString, ''))
  t.ok(ty.is(maybeString, null))
  t.false(ty.is(maybeString, 1))
  t.false(ty.is(maybeString, {}))
  t.end()
})
