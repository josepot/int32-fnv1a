A 32 bit FNV-1a hash algorithm implementation for hashing `Int32` values (rather than `Strings`).
The output it's also a `Int32`.

## Usage

```js

var assert = require('assert');
var hash = require('int32-fnv1a'),

assert.ok(
  hash(0xe04d9fcb) === 0,
  'The hash did not return the expected value'
);
/**
 * If you are wondering why the result of this is 0
 * visit this page: http://isthe.com/chongo/tech/comp/fnv/
 * and look for the following text: `FNV32_1a(e0 4d 9f cb)`
 */

```

## Installation

With npm:

    npm install --save int32-fnv1a

With git:

    git clone git://github.com/josepot/int32-fnv1a.git

## License

[MIT license](https://github.com/josepot/int32-fnv1a/blob/master/LICENSE).
