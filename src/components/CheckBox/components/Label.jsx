import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../constants';

export default function Label({ children, ...rest }) {
  return (
    <Text style={styles.label} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  label: {
    marginLeft: 8,
    color: colors.main,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
  },
});
