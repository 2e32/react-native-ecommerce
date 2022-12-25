import { StyleSheet, View, Text, Pressable } from 'react-native';

import { colors } from '../../../constants';

function Label(props) {
  const { children, color, style, ...rest } = props;

  return (
    <Text style={[styles.tabLabel, { color }, style]} numberOfLines={1} {...rest}>
      {children}
    </Text>
  );
}

function Icon(props) {
  const { icon: IconComponent, ...rest } = props;

  return IconComponent ? (
    <View style={styles.tabIconContainer}>
      <IconComponent width={32} height={32} {...rest} />
    </View>
  ) : null;
}

export default function TabItem(props) {
  const { label, icon, focused, ...rest } = props;

  const color = focused ? colors.main : colors.sub;

  return (
    <Pressable style={styles.tabItem} {...rest}>
      <Icon icon={icon} fill={color} />
      <Label color={color}>{label}</Label>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },
  tabLabel: {
    fontSize: 14,
  },
  tabIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    backgroundColor: colors.secondary,
    borderRadius: 8,
  },
});
