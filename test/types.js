const test = require('tape')

const ty = require('../')
const { stringify } = require('../util')

test('typeof', function (t) {
  const values = {
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
      new Object,
      Object.create(null),
      null,
      [],
      /a/,
      new Date(0)
    ],
    Function: [
      function () {},
      () => {},
      new Function(),
    ]
  }
  Object.keys(values).forEach(typeName => {
    const valuesOfType = values[typeName]

    valuesOfType.forEach((value) => {
      t.ok(
        ty.is(ty[typeName], value),
        `${stringify(value)} is a ${typeName}`
      )
    })

    const valuesNotOfType = Object.keys(values)
    .filter(name => name !== typeName)
    .reduce((sofar, nextTypeName) => {
      return sofar.concat(values[nextTypeName])
    }, [])

    valuesNotOfType.forEach((value) => {
      t.notOk(
        ty.is(ty[typeName], value),
        `${stringify(value)} is not a ${typeName}`
      )
    })
  })

  t.end()
})
