import { StyleSheet, View, Pressable, Text, Image } from 'react-native';

import { colors } from '../../constants';

export default function ProductCard({ title, image, price, ...rest }) {
  return (
    <Pressable style={styles.container} {...rest}>
      {image ? (
        <Image
          source={{ uri: `${image}?f=xxxs` }}
          resizeMode="contain"
          alt={title}
          style={styles.image}
        />
      ) : (
        <View style={styles.image} />
      )}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>$ {price}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '50%',
    padding: 12,
  },
  image: {
    height: 200,
    backgroundColor: colors.sub,
    borderRadius: 8,
  },
  title: {
    paddingTop: 8,
    paddingBottom: 4,
    color: colors.sub,
    fontSize: 14,
    lineHeight: 20,
  },
  price: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
