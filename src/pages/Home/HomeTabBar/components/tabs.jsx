import Color from 'color';

import { colors } from '../../../../constants';

import icons from '../../../../assets/icons/svg';

import TabItem from './TabItem';
import TabIcon from './TabIcon';
import TabLabel from './TabLabel';

export function DefaultTab(props) {
  const { label, icon, focused = false, ...rest } = props;

  const color = focused ? colors.main : colors.sub;

  return (
    <TabItem {...rest}>
      <TabIcon icon={icon} fill={color} />
      <TabLabel color={color}>{label}</TabLabel>
    </TabItem>
  );
}

export function PopularTab(props) {
  const { label, focused = false, ...rest } = props;

  const color = focused ? colors.main : Color(colors.main).alpha(0.85).rgb().string();

  return (
    <TabItem {...rest}>
      <TabIcon icon={icons.shape.StarSvgIcon} fill={colors.white} strokeWidth={0} bgColor={color} />
      <TabLabel color={color}>{label}</TabLabel>
    </TabItem>
  );
}
