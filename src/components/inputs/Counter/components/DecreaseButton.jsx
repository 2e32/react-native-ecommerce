import icons from '../../../../assets/icons/svg';

import Button from './Button';

const { MinusSvgIcon } = icons.math;

export default function DecreaseButton(props) {
  return (
    <Button {...props}>
      <MinusSvgIcon />
    </Button>
  );
}
