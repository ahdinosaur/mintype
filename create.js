const validate = require('./validate')
const isType = require('./isType')
const assert = require('./assert')

module.exports = create

function create (prevType) {
  Type.type = prevType.type
  Type.rules = prevType.rules

  Type.validate = (value) => {
    return validate(Type, value)
  }
  Type.is = (value) => {
    return isType(Type, value)
  }

  return Type
  
  function Type (value) {
    assert(Type, value)
    return value
  }
}
