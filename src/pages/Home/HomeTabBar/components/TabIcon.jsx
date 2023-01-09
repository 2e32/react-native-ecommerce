import { StyleSheet, View } from 'react-native';

import { colors } from '../../../../constants';

function Container(props) {
  const { children, color = colors.secondary, style, ...rest } = props;

  return (
    <View style={[styles.tabIcon, { backgroundColor: color }, style]} {...rest}>
      {children}
    </View>
  );
}

function Icon(props) {
  const { icon: IconComponent, ...rest } = props;

  return IconComponent ? <IconComponent width={32} height={32} {...rest} /> : null;
}

export default function TabIcon({ bgColor, ...rest }) {
  return (
    <Container color={bgColor}>
      <Icon {...rest} />
    </Container>
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 44,
    height: 44,
    borderRadius: 8,
  },
});
