# simple-type

simple type abstraction

**not useful yet, come back another time**

```shell
npm install --save simple-type
```

## what?

what's a type?

a type is a named collection of rules

**a Rule is a function**

give a `value`, returns either

- a new value
- an instance of `Error`

**a Type `T` is an object** of

- `type`: `String` name for the type
- `rules`: `Array` of rules

we can use this in many interesting ways

- create a factory `Function` that is _idempotent_, as in F(value) === F(F(value))`
  - this can throw errors in development, but avoid expensive checks in production
- create a validation `Function` that returns `Array` of `Error` about `value` being type `T`
- create a test `Function` that returns `Boolean` of whether `value` is type `T`

## usage

### `st = require('simple-type')`

### built-in types

- `st.String`: strings
- `st.Number`: numbers
- `st.Integer`: integers
- `st.Boolean`: booleans
- `st.Array`: arrays
- `st.Object`: plain objects
- `st.Function`: functions
- `st.Error`: errors
- `st.RegExp`: regular expressions
- `st.Date`: dates
- `st.Nil`: `null` or `undefined`
- `st.Any`: any value
- `st.Type`: a `tcomb` type

### `F = st.create(Type)

given a type definition, return a typed factory (which is also compatible as a definition).

`F(value)` returns the typed version of `value`, as in

- if there are errors from applying the rules, then `F` will throw
- otherwise `F` returns the result of applying the rules

`F` has the `type` and `rules` keys from `Type`, plus:

- `type`: `String` name for the type
- `rules`: `Array` of rules

### `st.validate(type, value)`

reduce rules over value.

return errors as an array (empty if none)

## inspiration

- [`tcomb`](https://github.com/gcanti/tcomb)
- @dominictarr's idea of validation as a reducer function
    (initialState, value) -> (nextState | false)
- [`stampit`](github.com/stampit-org/stampit)
- json-schema type objects
- [C data types](https://en.wikipedia.org/wiki/C_data_types#Structures)

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
