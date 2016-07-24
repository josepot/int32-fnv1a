A 32 bit FNV-1a hash algorithm implementation that takes an Int32 as an input.

## Usage

```js

var assert = require('assert');
var hash = require('int32-fnv1a'),

assert.ok(
  hash(0xe04d9fcb) === 0,
  'The hash did not return the expected value'
);

```

## Installation

With npm:

    npm install --save int32-fnv1a

With git:

    git clone git://github.com/josepot/int32-fnv1a.git

## License

[MIT license](https://github.com/josepot/int32-fnv1a/blob/master/LICENSE).
