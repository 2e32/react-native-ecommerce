import { StyleSheet, Pressable } from 'react-native';

import { colors } from '../../../../constants';

export default function Button(props) {
  const { style, ...rest } = props;

  return <Pressable style={[styles.btn, style]} {...rest} />;
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: colors.secondary,
    borderRadius: 6,
  },
});
