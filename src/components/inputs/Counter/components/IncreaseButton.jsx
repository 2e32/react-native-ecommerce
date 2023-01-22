import icons from '../../../../assets/icons/svg';

import Button from './Button';

const { PlusSvgIcon } = icons.math;

export default function IncreaseButton(props) {
  return (
    <Button {...props}>
      <PlusSvgIcon />
    </Button>
  );
}
