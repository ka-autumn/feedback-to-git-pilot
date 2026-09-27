export function formatRemainingAttempts(count) {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('残り回数は0以上の整数で指定してください');
  return `残り${count}回`;
}
