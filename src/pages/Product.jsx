import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Counter } from '../components';
import { colors, mocks } from '../constants';

export default function Product() {
  const route = useRoute();
  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(null);

  useEffect(() => {
    navigation.setParams({ productId: 1 });
  }, []);

  useEffect(() => {
    if (route.params?.productId) {
      const foundProduct = mocks.products.chairs.find((x) => x.id === route.params.productId);

      setProduct(foundProduct);
    }
  }, [route.params?.productId]);

  const handleAddToFavorite = () => {};

  const handleAddToCart = () => {};

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{product?.name}</Text>

      <View style={styles.panel}>
        <Text style={styles.price}>$ {product?.price}</Text>
        <Counter value={count} min={0} onChange={setCount} />
      </View>

      <View style={styles.panel2}>
        <Text style={styles.raiting}>{product?.raiting}</Text>
        <Text style={styles.reviews}>({product?.reviews} reviews)</Text>
      </View>

      <Text style={styles.description}>{product?.description}</Text>
      <Button title="Add to favorite" onPress={handleAddToFavorite} />
      <Button title="Add to cart" onPress={handleAddToCart} />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="<" onPress={handleGoBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
  },
  panel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  panel2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 30,
    fontWeight: '800',
  },
  raiting: {
    fontSize: 20,
    fontWeight: '800',
  },
  reviews: {
    marginLeft: 18,
    color: colors.sub,
    fontSize: 14,
  },
  description: {
    marginTop: 8,
    color: colors.sub,
    fontSize: 16,
    lineHeight: 20,
  },
});
