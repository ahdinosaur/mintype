const ObjectType = require('./Object')
const AllOf = require('./AllOf')
const is = require('../is')
const stringify = require('../util/stringify')

module.exports = function Dictionary (value, covalue) {
  return AllOf([
    ObjectType,
    (object) => {
      return Object.keys(object).every(
        (key) => is(value, key) && is(covalue, object[key]))
        ? object
        : new TypeError(`Expected ${stringify(object)} to have all keys and vals {${stringify(value)} : ${stringify(covalue)}}`)
    }
  ])
}
