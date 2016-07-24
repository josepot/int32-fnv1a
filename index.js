/**
 * Created by josepot on 2016-07-24
 */

var FNV_32_BASE = 2166136261;
var BYTE_MASK = 0x000000ff;

/**
 * Generates 32 bit FNV-1a hash from a given Int32 input.
 * This implementation is based on this: http://isthe.com/chongo/tech/comp/fnv/#FNV-1a
 *
 * @param input {Int32} The Int32 input that will be used to generate the hash.
 * @returns {Int32} The Int32 hashed value.
 */
function hash(input) {
  var bytes = [
    input >>> 24,
    (input >>> 16) & BYTE_MASK,
    (input >>> 8) & BYTE_MASK,
    input & BYTE_MASK
  ];

  var result = FNV_32_BASE;

  bytes.forEach(function (byte) {
    result ^= byte;
    result = multiplyByFnv32Prime(result);
  });

  return result;
}

function multiplyByFnv32Prime(n) {
  var part1 = 403;
  var part2 = 16777216;
  return ((part1 * n) + (part2 * n | 0)) | 0;
}

module.exports = hash;
