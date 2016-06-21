module.exports = validate

function validate (Type, value) {
  const { type, rules } = Type

  return rules.reduce((sofar, next) => {
    const error = next(value)

    return (error instanceof Error)
      ? sofar.concat([error]) : sofar
  }, [])
}
