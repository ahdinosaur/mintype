module.exports = validate

function validate (Type, value) {
  const nextValue = Type(value)
  return nextValue instanceof Error
    ? nextValue : null
}
