const AnyOf = require('./AnyOf')
const Nil = require('./Nil')

module.exports = (type) => AnyOf([type, Nil])

