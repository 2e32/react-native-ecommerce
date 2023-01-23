import icons from '../../../../assets/icons/svg';
import { colors } from '../../../../constants';

import Button from './Button';

const { PlusSvgIcon } = icons.math;

export default function IncreaseButton({ disabled = false, ...rest }) {
  return (
    <Button disabled={disabled} {...rest}>
      <PlusSvgIcon fill={disabled ? colors.sub : colors.main} />
    </Button>
  );
}
