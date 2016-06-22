module.exports = Object.assign(
  {
    validate: require('./validate'),
    is: require('./is'),
    create: require('./create'),
    compose: require('./compose')
  },
  require('./types')
)
