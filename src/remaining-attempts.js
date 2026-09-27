export function formatRemainingAttempts(count) {
  if (!Number.isInteger(count) || count < 0) throw new RangeError('残り回数には0以上の整数を指定してください。');
  return `残り${count}回`;
}
