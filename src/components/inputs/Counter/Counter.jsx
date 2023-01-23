import { useCallback, useMemo } from 'react';

import { Container, DecreaseButton, IncreaseButton, Label } from './components';

const DEFAULT_VALUE = 0;
const DEFAULT_STEP = 1;

const isValidNumber = (num) => Number.isFinite(num);

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

const getValue = ({ value, defaultValue, min, max }) => {
  if (isValidNumber(value)) return normalizeByRange(value, min, max);
  else return normalizeByRange(defaultValue, min, max);
};

export default function Counter(props) {
  const {
    value,
    defaultValue = DEFAULT_VALUE,
    increaseStep = DEFAULT_STEP,
    decreaseStep = DEFAULT_STEP,
    min,
    max,
    format,
    onChange,
  } = props;
  console.log('value', value, typeof value === 'number');
  const formattedValue = useMemo(
    () => (typeof format === 'function' ? format(value) : value),
    [value, format]
  );

  const changeValue = useCallback(
    (num) => {
      if (typeof onChange === 'function') onChange(num);
    },
    [onChange]
  );

  const clearValue = useCallback(() => {
    changeValue(null);
  }, [changeValue]);

  const handleIncrease = () => {
    const normalizedValue = getValue({ value, defaultValue, min, max });

    changeValue(normalizedValue + increaseStep);
  };

  const handleDecrease = () => {
    const normalizedValue = getValue({ value, defaultValue, min, max });

    changeValue(normalizedValue - decreaseStep);
  };

  const increaseDisabled = useMemo(() => {
    if (isValidNumber(max)) {
      if (isValidNumber(value) && value >= max) return true;
      if (isValidNumber(defaultValue) && defaultValue >= max) return true;

      return false;
    }

    return false;
  }, [value, defaultValue, max]);

  const decreaseDisabled = useMemo(() => {
    if (isValidNumber(min)) {
      if (isValidNumber(value) && value <= min) return true;
      if (isValidNumber(defaultValue) && defaultValue <= min) return true;

      return false;
    }

    return false;
  }, [value, defaultValue, min]);

  return (
    <Container>
      <IncreaseButton disabled={increaseDisabled} onPress={handleIncrease} />
      <Label>{formattedValue}</Label>
      <DecreaseButton disabled={decreaseDisabled} onPress={handleDecrease} />
    </Container>
  );
}
