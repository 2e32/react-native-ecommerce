import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../constants';

export default function Label({ children, disabled = false, ...rest }) {
  return (
    <Text style={[styles.label, disabled && styles.labelDisabled]} {...rest}>
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
  labelDisabled: {
    color: colors.sub,
  },
});
