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

// TODO compose one of ?
// TODO compose some of ?
// TODO compose all of ?
// TODO if ?
// TODO plugins ?
// TODO is compose a plugin ?
// compose is a one / some / all
// it's a predicate!
// plugins are reducer predicates from same level state

const Thing = toConstructor(thingType)
const Items = toConstructor(itemsType)

const isPerson = toValidator(personType)

const personForm = toForm(personType)

const personDocs = toDocumentation(personType)

const typesGraph = toGraph(types)
