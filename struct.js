module.exports = createStruct

function createStruct (name, propTypes) {
  Struct.prototype = Object.create(create.prototype)

  return create

  function create (props) {
    if (props instanceof Struct) {
      return props
    }

    var value = {}

    for (var propName in propTypes) {
      const prop = props[propName]
      const propType = propTypes[propName]
      const propValue = propType(prop)

      if (propValue instanceof Error) {
        return propValue
      }

      value[propName] = propValue
    }

    return new Struct(value)
  }

  function Struct (props) {
    this.type = name

    for (var propName in props) {
      const prop = props[propName]
      const propType = propTypes[propName]

      this[propName] = propType(prop)
    }
  }
}
