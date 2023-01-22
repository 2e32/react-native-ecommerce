import { useCallback, useMemo } from 'react';

import { Container, DecreaseButton, IncreaseButton, Label } from './components';

const DEFAULT_STEP = 1;

export default function Counter(props) {
  const {
    value,
    increaseStep = DEFAULT_STEP,
    decreaseStep = DEFAULT_STEP,
    format,
    onChange,
  } = props;

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
    if (Number.isFinite(value)) changeValue(value + increaseStep);
    else if (value == null) clearValue();
  };

  const handleDecrease = () => {
    if (Number.isFinite(value)) changeValue(value - decreaseStep);
    else if (value == null) clearValue();
  };

  return (
    <Container>
      <IncreaseButton onPress={handleIncrease} />
      <Label>{formattedValue}</Label>
      <DecreaseButton onPress={handleDecrease} />
    </Container>
  );
}
