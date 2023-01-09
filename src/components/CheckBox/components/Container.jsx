import { StyleSheet, Pressable } from 'react-native';

export default function Container({ children, ...rest }) {
  return (
    <Pressable style={styles.container} {...rest}>
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
