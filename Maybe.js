var AnyOf = require('./AnyOf')
var {Nil} = require('./types')

module.exports = (type) => AnyOf([type, Nil])

