const assign = require('object-assign')

module.exports = assign(
  {
    create: require('./create'),
    validate: require('./validate'),
    is: require('./is')
  },
  require('./types')
)
