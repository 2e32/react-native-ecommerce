import { useMemo } from 'react';

import { Container, DecreaseButton, IncreaseButton, Label } from './components';
import { getValue, isValidNumber } from './utils';

export default function Counter(props) {
  const { value, min, max, format, onChange } = props;

  const formattedValue = useMemo(
    () => (typeof format === 'function' ? format(value) : value),
    [value, format]
  );

  const handleIncrease = () => {
    const safeValue = getValue({ value, min, max });

    if (safeValue < min) onChange?.(safeValue);
    else onChange?.(safeValue + 1);
  };

  const handleDecrease = () => {
    const safeValue = getValue({ value, min, max });

    if (safeValue > max || safeValue - 1 <= min) onChange?.(safeValue);
    else onChange?.(safeValue - 1);
  };

  const increaseDisabled = useMemo(() => {
    if (!isValidNumber(max)) return false;
    if (isValidNumber(value) && value >= max) return true;

    return false;
  }, [value, max]);

  const decreaseDisabled = useMemo(() => {
    if (!isValidNumber(min)) return false;
    if (isValidNumber(value) && value <= min) return true;

    return false;
  }, [value, min]);

  return (
    <Container>
      <IncreaseButton disabled={increaseDisabled} onPress={handleIncrease} />
      <Label>{formattedValue}</Label>
      <DecreaseButton disabled={decreaseDisabled} onPress={handleDecrease} />
    </Container>
  );
}
