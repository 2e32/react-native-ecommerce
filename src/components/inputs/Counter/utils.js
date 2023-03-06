export const isValidNumber = (num) => Number.isFinite(num);

const normalizeByRange = (num, min, max) => {
  const validNum = isValidNumber(num);
  const validMin = isValidNumber(min);
  const validMax = isValidNumber(max);

  if (validNum) {
    if (validMin && num < min) return min;
    if (validMax && num > max) return max;

    return num;
  } else {
    if (validMin) return min;
    if (validMax) return max;

    return 0;
  }
};

export const getValue = ({ value, min, max }) => {
  const safeValue = isValidNumber(value) ? value : 0;

  return normalizeByRange(safeValue, min, max);
};
