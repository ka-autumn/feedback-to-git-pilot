export function formatRemainingAttempts(count) {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('count must be a nonnegative integer');
  return `残り${Math.max(1, count)}回`;
}
