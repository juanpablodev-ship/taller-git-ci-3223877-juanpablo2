import test from 'node:test';
import assert from 'node:assert/strict';
function mult(a, b) {
  return a * b;
}
test('mult 2 * 3 = 6', () => {
  assert.equal(mult(2, 3), 6);
});
