import icons from '../../../../assets/icons/svg';
import { colors } from '../../../../constants';

import Button from './Button';

const { MinusSvgIcon } = icons.math;

export default function DecreaseButton({ disabled = false, ...rest }) {
  return (
    <Button disabled={disabled} {...rest}>
      <MinusSvgIcon fill={disabled ? colors.sub : colors.main} />
    </Button>
  );
}
