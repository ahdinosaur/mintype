module.exports = create

function create (Type, value) {
  const nextValue = Type(value)

  if (process.env.NODE_ENV !== 'production') {
    if (nextValue instanceof Error) {
      throw Error
    }
  }

  return nextValue instanceof Error
    ? value : nextValue
}
