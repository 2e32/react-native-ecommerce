import { StyleSheet, Pressable } from 'react-native';

export default function Container(props) {
  const { children, disabled = false, style, ...rest } = props;

  return (
    <Pressable disabled={disabled} style={[styles.container, style]} {...rest}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
  },
});
