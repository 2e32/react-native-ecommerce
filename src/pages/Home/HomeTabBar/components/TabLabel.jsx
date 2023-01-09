import { StyleSheet, Text } from 'react-native';

export default function TabLabel(props) {
  const { children, color, style, ...rest } = props;

  return (
    <Text style={[styles.tabLabel, { color }, style]} numberOfLines={1} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontSize: 14,
  },
});
