import assert from 'node:assert/strict';
import { test } from 'node:test';
import { formatRemainingAttempts } from '../src/remaining-attempts.js';

test('残数0は残り0回と表示する', () => { assert.equal(formatRemainingAttempts(0), '残り0回'); });
test('正の残数をそのまま表示する', () => {
  assert.equal(formatRemainingAttempts(1), '残り1回');
  assert.equal(formatRemainingAttempts(3), '残り3回');
});
test('負数と小数は拒否する', () => {
  assert.throws(() => formatRemainingAttempts(-1), RangeError);
  assert.throws(() => formatRemainingAttempts(1.5), RangeError);
});
