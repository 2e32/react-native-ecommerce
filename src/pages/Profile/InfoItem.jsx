import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../constants';

export default function InfoItem({ title, description }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    marginVertical: 12,
    paddingVertical: 18,
    paddingLeft: 18,
    paddingRight: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 8,
  },
  title: {
    color: colors.main,
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
  },
  description: {
    color: colors.sub,
    fontSize: 14,
    lineHeight: 20,
  },
});
