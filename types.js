const create = require('./create')
const rulesByType = require('./rules')

const types = Object.keys(rulesByType)
.reduce((sofar, nextType) => {
  const rules = rulesByType[nextType]
  
  return Object.assign(sofar, {
    [nextType]: create({
      type: nextType,
      rules
    })
  })
}, {})

module.exports = types
