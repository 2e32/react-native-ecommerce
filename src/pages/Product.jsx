import { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, View, ScrollView, Text, Button, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

import { Counter } from '../components';
import { colors, mocks } from '../constants';

export default function Product() {
  const route = useRoute();
  const navigation = useNavigation();

  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(null);

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
    <ScrollView>
      <Image source={{ uri: product?.image }} alt="" style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.header}>{product?.name}</Text>

        <View style={styles.pricePanel}>
          <Text style={styles.price}>$ {product?.price}</Text>
          <Counter value={count} min={0} onChange={setCount} />
        </View>

        <View style={styles.raitingPanel}>
          <Text style={styles.raiting}>{product?.raiting}</Text>
          <Text style={styles.reviews}>({product?.reviews} reviews)</Text>
        </View>

        <Text style={styles.description}>{product?.description}</Text>
      </View>
      <View style={styles.container}>
        <Button title="Add to favorite" onPress={handleAddToFavorite} />
        <Button title="Add to cart" onPress={handleAddToCart} />
        <Button title="<" onPress={handleGoBack} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '90%',
    height: Dimensions.get('window').height / 2,
    marginLeft: 'auto',
    resizeMode: 'contain',
    borderBottomLeftRadius: 50,
  },
  container: {
    padding: 16,
  },
  header: {
    marginVertical: 16,
    fontSize: 24,
    fontWeight: '600',
  },
  pricePanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  raitingPanel: {
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
