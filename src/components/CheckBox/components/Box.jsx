import { StyleSheet, View } from 'react-native';

import { colors } from '../../../constants';

import icons from '../../../assets/icons/svg';

const { CheckSvgIcon } = icons.shape;

export default function Box({ checked = false, ...rest }) {
  return (
    <View style={[styles.box, checked && styles.boxChecked]} {...rest}>
      {checked && <CheckSvgIcon />}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderColor: colors.main,
    borderWidth: 1,
    borderRadius: 4,
  },
  boxChecked: {
    backgroundColor: colors.main,
  },
});
