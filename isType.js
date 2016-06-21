const validate = require('./validate')

module.exports = isType

function isType (Type, value) {
  return validate(Type, value).length === 0
}

