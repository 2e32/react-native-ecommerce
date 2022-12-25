import { StyleSheet, View } from 'react-native';

import { colors } from '../../../constants';

import TabItem from './TabItem';
import { getLabel, getIcon, getIsFocused } from './utils';

export default function HomeTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = getLabel(options.tabBarLabel, options.title, route.name);
        const icon = getIcon(route.name);
        const isFocused = getIsFocused(index, state.index);

        const onPress = () => {
          const event = navigation.emit({ type: 'tabPress', target: route.key });

          if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name);
        };

        return (
          <TabItem
            key={route.key}
            label={label}
            icon={icon}
            focused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
  },
});
