module.exports = create

function create (Type, value) {
  const nextValue = Type(value)

  if (process.env.NODE_ENV !== 'production') {
    if (nextValue instanceof TypeError) {
      throw TypeError
    }
  }

  return nextValue instanceof TypeError
    ? value : nextValue
}
