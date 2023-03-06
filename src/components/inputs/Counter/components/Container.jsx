import { StyleSheet, View } from 'react-native';

export default function Container(props) {
  return <View style={styles.container} {...props} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
});
