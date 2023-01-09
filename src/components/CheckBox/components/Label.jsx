import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../constants';

export default function Label(props) {
  const { children, disabled = false, style, ...rest } = props;

  return (
    <Text style={[styles.label, disabled && styles.labelDisabled, style]} {...rest}>
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
