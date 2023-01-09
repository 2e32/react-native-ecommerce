import { StyleSheet, View } from 'react-native';

import { colors } from '../../../constants';

import icons from '../../../assets/icons/svg';

const { CheckSvgIcon } = icons.shape;

const getBoxStyle = (checked, disabled) => {
  if (disabled) return checked ? styles.checkedBoxDisabled : styles.uncheckedBoxDisabled;
  if (checked) return styles.boxChecked;

  return null;
};

export default function Box({ checked = false, disabled = false, ...rest }) {
  return (
    <View style={[styles.box, getBoxStyle(checked, disabled)]} {...rest}>
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
  checkedBoxDisabled: {
    backgroundColor: colors.sub,
    borderColor: colors.sub,
  },
  uncheckedBoxDisabled: {
    borderColor: colors.sub,
  },
});
