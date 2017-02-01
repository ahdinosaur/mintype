const test = require('tape')

const ty = require('../../')

test('Struct', function (t) {
  const Thing = ty.Struct('Thing', {
    name: ty.String,
    excitement: ty.Number
  })

  t.equal(typeof Thing, 'function', 'Struct is a function')
  t.ok(typeof Thing.prototype, 'object', 'Struct has a prototype')

  Thing.prototype.announce = function announceThing () {
    var str = []
    for (var i = 0; i < this.excitement; i++) {
      str.push(`${this.name}!`)
    }
    return str.join(' ')
  }
  const props = {
    name: 'computer',
    excitement: 3
  }

  const thing = Thing(Object.assign({}, props))

  t.deepEqual(
    thing,
    Object.assign({ type: 'Thing' }, props),
    'instance has correct props'
  )

  t.equal(
    thing.announce,
    Thing.prototype.announce,
    'instance method is same as Struct prototype method'
  )
  t.equal(
    thing.announce(),
    'computer! computer! computer!',
    'instance method works'
  )

  const nextThing = Thing(thing)
  t.equal(nextThing, thing, 'Struct is idempotent')

  const error = Thing({
    name: 'desk'
  })

  t.ok(error instanceof Error, 'incorrect props returns error')
  t.equal(error.message, 'expected typeof undefined == number', 'error is correct')

  t.end()
})
