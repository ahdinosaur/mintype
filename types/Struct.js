module.exports = createStruct

function createStruct (name, propTypes) {
  CStruct.prototype = Object.create(Struct.prototype)

  return Struct

  function Struct (props) {
    if (props instanceof CStruct) {
      return props
    }

    var value = {}

    for (const propName in propTypes) {
      if (propName === 'type') continue
      const prop = props[propName]
      const propType = propTypes[propName]
      const propValue = propType(prop)

      if (propValue instanceof TypeError) {
        return propValue
      }

      value[propName] = propValue
    }

    return new CStruct(value)
  }

  function CStruct (props) {
    this.type = name

    for (const propName in props) {
      const prop = props[propName]
      this[propName] = prop
    }
  }
}
