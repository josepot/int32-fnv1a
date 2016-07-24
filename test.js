var assert = require('assert');
var hash = require('./index.js');

/**
 * If you are wondering why, go here: http://isthe.com/chongo/tech/comp/fnv/
 * and find this: FNV32_1a(e0 4d 9f cb)
 */
assert.ok(
  hash(0xe04d9fcb) === 0,
  'The hash did not return the expected value'
);
