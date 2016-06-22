# mintype [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

simple type abstraction

```shell
npm install --save mintype
```

## what?

what's a type?

**a Type `T` is a function** where

given a value `v`, `T` returns either:

- a new value `v*` (which might be `===` to `v`)
- an instance of `Error`

and given `v*`, `T` returns `v*`.

we can use this in many interesting ways

- create a factory `Function` that is _idempotent_, as in `F(value) === F(F(value))`
  - to do this, we throw errors in development, and ignore them in production.
- create a validation `Function` that returns `Error` or `null` about `value` being type `T`
- create a test `Function` that returns `Boolean` of whether `value` is type `T`

## usage

### `ty = require('mintype')`

the top-level `mintype` module is a grab bag of all `mintype/*` modules.

you can also require each module separately like `require('mintype/create')`.

### `b = ty.create(T, a)`

`create(T, value)` only returns the *typed* version of `value`, as in:

- if there is an error from applying the type `T`, then `create` will throw
- otherwise `create` returns the resulting value from applying the type `T`

### `ty.validate(T, value)`

if `value` is type `T`, return `null`;

else return `Error` returned from `T(value)`.

### `ty.is(T, value)`

if `value` is type `T`, return `true`;

else return `false`.

### built-in types

- `ty.String`: strings
- `ty.Number`: numbers
- `ty.Integer`: integers
- `ty.Boolean`: booleans
- `ty.Array`: arrays
- `ty.Object`: plain objects
- `ty.Function`: functions
- `ty.RegExp`: regular expressions
- `ty.Date`: dates
- `ty.Nil`: `null` or `undefined`
- `ty.Any`: any value

## FAQ

### how to optimize types in production?

for more performant types in production, only do expensive error-checking if `process.env.NODE_ENV !== 'production'`.

this allows the code to be stripped out with [`browserify`](http://browserify.org/) bundles using [`envify`](https://github.com/hughsk/envify) and [`uglifyify`](https://github.com/hughsk/uglifyify).

the built-in types and type utilities do this already, but if you are supplying your own types from scratch you will need to do this on your own.

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

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/mintype.svg?style=flat-square
[3]: https://npmjs.org/package/mintype
[4]: https://img.shields.io/travis/ahdinosaur/mintype/master.svg?style=flat-square
[5]: https://travis-ci.org/ahdinosaur/mintype
[6]: https://img.shields.io/codecov/c/github/ahdinosaur/mintype/master.svg?style=flat-square
[7]: https://codecov.io/github/ahdinosaur/mintype
[8]: http://img.shields.io/npm/dm/mintype.svg?style=flat-square
[9]: https://npmjs.org/package/mintype
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
