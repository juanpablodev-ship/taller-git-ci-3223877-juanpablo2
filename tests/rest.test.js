import test from 'node:test';
import assert from 'node:assert/strict';
function rest(a, b) {
  return a - b;
}
test('rest 2 -3 = -1', () => {
  assert.equal(rest(2, 3), -1);
});
