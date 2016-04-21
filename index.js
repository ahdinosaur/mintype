// i wonder what the simplest possible way
// to define and use types.
//
// requirements:
// - must be able to generate:
//   - constructor
//   - validator
//   - documentation
//   - domain model diagram
//
// inspirations:
// - @dominictarr's idea of validation as a reducer function
//    (initialState, value) -> (nextState | false)
// - `stampit` compose
// - `tcomb` irreducible
// - `tcomb` utilities to create meta objects
// - json-schema type objects
// - C data types: https://en.wikipedia.org/wiki/C_data_types#Structures
//
// questions:
// - how to describe reducers as objects
//


// strawman
const stringType = {
  kind: 'irreducible',
  name: 'String',
  predicate: function (value) {
    return typeof value === 'string'
  },
}

const thingType = {
  kind: 'struct',
  name: 'Thing',
  properties: {
    name: stringType,
    description: stringType,
  },
}

const emailType = {
  kind: 'irreducible',
  name: 'Email',
  composes: [stringType],
  predicate: function (value) {
    return emailRe.test(value)
  },
}

const personType = {
  kind: 'struct',
  name: 'Person',
  composes: [thingType],
  properties: {
    email: stringType
  },
}

const itemType = {
  kind: 'union',
  name: 'Item',
  types: [
    thingType,
    personType
  ],
}

const itemsType = {
  kind: 'list',
  name: 'People',
  type: itemType,
}

// TODO compose OR vs compose AND

const Thing = toConstructor(thingType)
const Items = toConstructor(itemsType)

const isPerson = toValidator(personType)

const personForm = toForm(personType)

const personDocs = toDocumentation(personType)

const typesGraph = toGraph(types)
