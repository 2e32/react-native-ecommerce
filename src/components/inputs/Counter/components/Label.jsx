import { StyleSheet, Text } from 'react-native';

import { colors } from '../../../../constants';

export default function Label(props) {
  const { style, ...rest } = props;

  return <Text style={[styles.label, style]} {...rest} />;
}

const styles = StyleSheet.create({
  label: {
    paddingHorizontal: 14,
    color: colors.main,
    fontSize: 18,
    lineHeight: 25,
  },
});
