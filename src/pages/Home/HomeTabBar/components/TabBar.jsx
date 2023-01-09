import { StyleSheet, View } from 'react-native';

import { colors } from '../../../../constants';

export default function TabBar({ children, style, ...rest }) {
  return (
    <View style={[styles.tabBar, style]} {...rest}>
      {children}
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
