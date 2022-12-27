import { StyleSheet, Pressable } from 'react-native';

export default function TabItem({ children, style, ...rest }) {
  return (
    <Pressable style={[styles.tabItem, style]} {...rest}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 5,
  },
});
