import { routes } from '../../../constants';

import * as icons from '../../../assets/icons/svg/furniture';

export const getLabel = (tabBarLabel, title, routeName) => {
  if (tabBarLabel != null) return tabBarLabel;
  if (title != null) return title;

  return routeName;
};

export const getIcon = (routeName) => {
  let icon;

  if (routeName === routes.home.POPULAR) {
    icon = icons.ChairSvgIcon;
  } else if (routeName === routes.home.CHAIR) {
    icon = icons.ChairSvgIcon;
  } else if (routeName === routes.home.TABLE) {
    icon = icons.TableSvgIcon;
  } else if (routeName === routes.home.ARMCHAIR) {
    icon = icons.ArmchairSvgIcon;
  } else if (routeName === routes.home.BED) {
    icon = icons.BedSvgIcon;
  }

  return icon;
};

export const getIsFocused = (itemIndex, selectedItemIndex) => itemIndex === selectedItemIndex;
