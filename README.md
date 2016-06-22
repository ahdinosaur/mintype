# mintype

simple type abstraction

**not useful yet, come back another time**

```shell
npm install --save mintype
```

## what?

what's a type?

**a Type `T` is a function** where

give a value `v`, returns either

- a new value `v*`
- an instance of `Error`

we can use this in many interesting ways

- create a factory `Function` that is _idempotent_, as in `F(value) === F(F(value))`
  - this can throw errors in development, but avoid expensive checks in production
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

## FAQ

### how to optimize types in production?

for more performant types in production, only check for errors if `process.env.NODE_ENV !== 'production'`.

this allows the code to be stripped out with `browserify` bundles using `envify` and `uglifyify`.

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
