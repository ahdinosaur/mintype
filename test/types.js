const test = require('tape')

const ty = require('../')
const { stringify } = require('../util')

test('typeof', function (t) {
  const values = {
    Any: [
      undefined
    ],
    String: [
      '',
      'a',
      String('asdfjkl;')
    ],
    Number: [
      0,
      -0,
      1,
      100,
      NaN,
      Number(3)
    ],
    Boolean: [
      true,
      false
    ],
    Object: [
      {},
      { },
      Object.create(null),
      null,
      [],
      /a/,
      new Date(0)
    ],
    Function: [
      function () {},
      () => {
      },
      new Function() // eslint-disable-line no-new-func
    ]
  }

  testTypes(t, values, { identity: true })

  t.end()
})

test('instanceof', function (t) {
  const values = {
    Any: [
      'a',
      0,
      null,
      undefined,
      [],
      {}
    ],
    Date: [
      new Date(),
      new Date(0),
      new Date(Date.parse('January 1, 2000'))
    ],
    RegExp: [
      /a/,
      new RegExp('a')
    ]
  }

  testTypes(t, values, { identity: true })

  t.end()
})

test('others', function (t) {
  const values = {
    Any: [
      'a',
      0.1,
      {},
      new Uint8Array()
    ],
    Integer: [
      1,
      Number(100),
      -1,
      Number(-100)
    ],
    Array: [
      [],
      new Array(10)
    ],
    Nil: [
      null,
      undefined
    ],
    Error: [
      new Error('something went wrong.')
    ]
  }

  testTypes(t, values)

  t.end()
})

function testTypes (t, values, options) {
  options = options || {}

  Object.keys(values)
    .forEach(typeName => {
      testOfType(t, values, typeName)
      if (typeName === 'Any') return
      testNotOfType(t, values, typeName)
      if (options.identity) {
        testIdInProd(t, typeName)
      }
    })
}

function testOfType (t, values, typeName) {
  const valuesOfType = values[typeName]

  valuesOfType.forEach((value) => {
    const Type = ty[typeName]
    t.ok(
      ty.is(Type, value),
      `${stringify(value)} is a ${typeName}`
    )
    t.equal(
      ty.validate(Type, value), null,
      `ty.validate(ty[${typeName}], ${stringify(value)}) === null`
    )
  })
}

function testNotOfType (t, values, typeName) {
  const valuesNotOfType = Object.keys(values)
    .filter(name => name !== typeName)
    .reduce((sofar, nextTypeName) => {
      return sofar.concat(values[nextTypeName])
    }, values.Any)

  valuesNotOfType.forEach((value) => {
    const Type = ty[typeName]
    t.notOk(
      ty.is(Type, value),
      `${stringify(value)} is not a ${typeName}`
    )
    const error = Type(value)
    t.ok(
      error instanceof Error,
      `ty[${typeName}](${stringify(value)}) instanceof Error`
    )
    const vError = ty.validate(Type, value)
    t.equal(
      vError.message, error.message,
      `ty.validate(ty[${typeName}], ${stringify(value)}) instanceof Error`
    )
  })
}

function testIdInProd (t, typeName) {
  // TODO must run in new vm
  /*
  const value = Symbol()
  const nodeEnv = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'
  t.equal(value, ty[typeName](value), `${typeName} is identity function in production`)
  process.env.NODE_ENV = nodeEnv
  */
}
