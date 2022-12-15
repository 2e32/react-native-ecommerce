import { StyleSheet, View, Text, Switch } from 'react-native';

import { colors } from '../../constants';

export default function SwitchWithLabel({ value, label, ...rest }) {
  return (
    <View style={styles.container}>
      <Switch
        value={value}
        trackColor={styles.switch.trackColor}
        thumbColor={styles.switch.thumbColor}
        {...rest}
      />
      <Text style={[styles.label, !value && styles.labelMuted]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  switch: {
    trackColor: {
      false: colors.secondary,
      true: colors.success,
    },
    thumbColor: colors.white,
  },
  label: {
    marginLeft: 8,
    color: colors.main,
    fontSize: 18,
    fontWeight: '400',
    lineHeight: 24,
  },
  labelMuted: {
    color: colors.sub,
  },
});
