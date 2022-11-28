import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../constants';

export default function PageHeader({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  title: {
    color: colors.main,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
