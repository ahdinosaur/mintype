module.exports = createStruct

function createStruct (name, propTypes) {
  return function create (props) {
    if (props instanceof Struct) {
      return props
    }

    const [value, errors] = Object.keys(props)
      .map((sofar, propName) => {
        const prop = props[propName]
        const propType = propTypes[propName]
        const propValue = propType(prop)

        if (Array.isArray(propValue)) {
          return [value, errors.concat(propValue)]
        }

        return [
          Object.assign(sofar, {
            [propName]: propValue
          }),
          errors
        ]
      })

    if (errors) {
      return errors
    }

    return new Struct(value)
  }

  function Struct (props) {
    this.type = name

    for (var key in props) {
      const prop = props[key]
      const propType = propTypes[key]

      this[name] = propType(prop)
    }
  }
}
