module.exports = {
  typeOf,
  instanceOf,
  union
}

function typeOf (type) {
  return [
    function (value) {
      return typeof value === type
        ? value
        : new Error(`expected typeof ${value} == ${type}`)
    }
  ]
}

function instanceOf (type) {
  return [
    function (value) {
      return value instanceof type
        ? value
        : new Error(`expected ${value} instanceof ${type}`)
    }
  ]
}

function union (types) {
  return function (value) {
    return types[value.type](value)
  }
}
