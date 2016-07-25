var assert = require('assert');
var hash = require('./index.js');

assert.ok(
  hash(0xe04d9fcb) === 0,
  'The hash did not return the expected value'
);
/**
 * If you are wondering why the result of this is 0
 * visit this page: http://isthe.com/chongo/tech/comp/fnv/
 * and look for the following text: `FNV32_1a(e0 4d 9f cb)`
 */
