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

  testTypes(t, values)

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

  testTypes(t, values)

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
    ]
  }

  testTypes(t, values)

  t.end()
})

function testTypes (t, values) {
  Object.keys(values)
    .forEach(typeName => {
      testOfType(t, values, typeName)
      if (typeName === 'Any') return
      testNotOfType(t, values, typeName)
    })
}

function testOfType (t, values, typeName) {
  const valuesOfType = values[typeName]

  valuesOfType.forEach((value) => {
    t.ok(
      ty.is(ty[typeName], value),
      `${stringify(value)} is a ${typeName}`
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
    t.notOk(
      ty.is(ty[typeName], value),
      `${stringify(value)} is not a ${typeName}`
    )
  })
}
