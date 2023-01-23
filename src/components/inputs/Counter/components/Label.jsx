import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../../../constants';

export default function Label({ children, ...rest }) {
  return (
    <View style={styles.wrapper} {...rest}>
      <Text style={styles.label}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    minWidth: 50,
    paddingHorizontal: 8,
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.main,
    fontSize: 18,
    lineHeight: 24,
  },
});
