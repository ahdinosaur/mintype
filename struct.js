module.exports = createStruct

function createStruct (name, propTypes) {
  cStruct.prototype = Object.create(Struct.prototype)

  return Struct

  function Struct (props) {
    if (props instanceof cStruct) {
      return props
    }

    var value = {}

    for (var propName in propTypes) {
      if (propName === 'type') continue
      const prop = props[propName]
      const propType = propTypes[propName]
      const propValue = propType(prop)

      if (propValue instanceof TypeError) {
        return propValue
      }

      value[propName] = propValue
    }

    return new cStruct(value)
  }

  function cStruct (props) {
    this.type = name

    for (var propName in props) {
      const prop = props[propName]
      const propType = propTypes[propName]

      this[propName] = propType(prop)
    }
  }
}
