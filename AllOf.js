module.exports = AllOf

function AllOf (Types) {
  return (value) => {
    return Types.reduce((sofar, Type) => {
      return sofar instanceof TypeError
        ? sofar : Type(sofar)
    }, value)
  }
}
