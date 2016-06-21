const validate = require('./validate')

module.exports = assert

function assert (rules, subject) {
  const errors = validate(rules, subject)

  if (errors) {
    errors.forEach(e => console.error(e))
    throw new Error('assertion error!')
  }

  return subject
}
