import { routes } from '../../../constants';

import { TabBar, PopularTab, DefaultTab } from './components';

import { getLabel, getIcon, getIsFocused } from './utils';

export default function HomeTabBar({ state, descriptors, navigation }) {
  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  const renderedTabs = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];

    const label = getLabel(options.tabBarLabel, options.title, route.name);
    const icon = getIcon(route.name);
    const isFocused = getIsFocused(index, state.index);

    const onPress = () => {
      const event = navigation.emit({ type: 'tabPress', target: route.key });

      if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
    };

    const tabItemProps = {
      key: route.key,
      label,
      focused: isFocused,
      onPress,
    };

    return route.name === routes.home.POPULAR ? (
      <PopularTab {...tabItemProps} />
    ) : (
      <DefaultTab icon={icon} {...tabItemProps} />
    );
  });

  return <TabBar style={focusedOptions.tabBarStyle}>{renderedTabs}</TabBar>;
}
