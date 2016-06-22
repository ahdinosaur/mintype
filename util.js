module.exports = {
  typeOf,
  instanceOf,
//  union,
  id,
  stringify
}

function typeOf (typeName) {
  if (process.env.NODE_ENV !== 'production') {
    return function (value) {
      return typeof value === typeName
        ? value
        : new TypeError(`expected typeof ${stringify(value)} == ${typeName}`)
    }
  }
  return id
}

function instanceOf (Ctor) {
  if (process.env.NODE_ENV !== 'production') {
    return function (value) {
      return value instanceof Ctor
        ? value
        : new TypeError(`expected ${stringify(value)} instanceof ${Ctor.name}`)
    }
  }
  return id
}

/*
function union (types) {
  return function (value) {
    return types[value.type](value)
  }
}
*/

function id (x) { return x }

function stringify (value) {
  return value != null
    ? value.toString
      ? value.toString()
      : JSON.stringify(value)
    : String(value)
}
