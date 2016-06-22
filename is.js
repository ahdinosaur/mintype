const validate = require('./validate')

module.exports = is

function is (Type, value) {
  return validate(Type, value) === null
}
