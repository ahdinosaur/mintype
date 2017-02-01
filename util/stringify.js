module.exports = function stringify (value) {
  return value != null
    ? value.toString
      ? value.toString()
      : JSON.stringify(value)
    : String(value)
}
