import { routes } from '../../../constants';

import icons from '../../../assets/icons/svg';

export const getLabel = (tabBarLabel, title, routeName) => {
  if (tabBarLabel != null) return tabBarLabel;
  if (title != null) return title;

  return routeName;
};

export const getIcon = (routeName) => {
  let icon;

  if (routeName === routes.home.POPULAR) {
    icon = icons.shape.StarSvgIcon;
  } else if (routeName === routes.home.CHAIR) {
    icon = icons.furniture.ChairSvgIcon;
  } else if (routeName === routes.home.TABLE) {
    icon = icons.furniture.TableSvgIcon;
  } else if (routeName === routes.home.ARMCHAIR) {
    icon = icons.furniture.ArmchairSvgIcon;
  } else if (routeName === routes.home.BED) {
    icon = icons.furniture.BedSvgIcon;
  }

  return icon;
};

export const getIsFocused = (itemIndex, selectedItemIndex) => itemIndex === selectedItemIndex;
