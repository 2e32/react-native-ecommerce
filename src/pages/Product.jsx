import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { colors, mocks } from '../constants';

export default function Product() {
  const route = useRoute();
  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);

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
    <>
      <Text style={styles.header}>{product?.name}</Text>
      <Text style={styles.price}>$ {product?.price}</Text>
      <Text>Count: {count}</Text>

      <Text>
        <Text style={styles.raiting}>{product?.raiting}</Text>
        <Text style={styles.reviews}>({product?.reviews} reviews)</Text>
      </Text>
      <Text style={styles.description}>{product?.description}</Text>
      <Button title="Add to favorite" onPress={handleAddToFavorite} />
      <Button title="Add to cart" onPress={handleAddToCart} />

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="<" onPress={handleGoBack} />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: '600',
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
    color: colors.sub,
    fontSize: 14,
  },
  description: {
    color: colors.sub,
    fontSize: 16,
    lineHeight: 20,
  },
});
