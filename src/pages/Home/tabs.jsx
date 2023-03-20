import { useCallback, useMemo } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { mocks, colors } from '../../constants';

import ProductCard from './ProductCard';

const flatListConfig = {
  numColumns: 2,
  style: {
    backgroundColor: colors.white,
  },
  keyExtractor: (item) => item.id,
};

const getRenderItem =
  (onPress) =>
  ({ item }) => {
    const handlePress = () => {
      if (onPress) onPress(item);
    };

    return (
      <ProductCard title={item.name} image={item.image} price={item.price} onPress={handlePress} />
    );
  };

const useRenderItem = () => {
  const navigation = useNavigation();

  const onProductCardPress = useCallback(
    (product) => {
      navigation.navigate('card', { productId: product.id });
    },
    [navigation]
  );

  const renderItem = useMemo(() => getRenderItem(onProductCardPress), [onProductCardPress]);

  return renderItem;
};

export function Popular() {
  const renderItem = useRenderItem();

  return <FlatList data={mocks.products.popular} renderItem={renderItem} {...flatListConfig} />;
}

export function Chair() {
  const renderItem = useRenderItem();

  return <FlatList data={mocks.products.chairs} renderItem={renderItem} {...flatListConfig} />;
}

export function Table() {
  const renderItem = useRenderItem();

  return <FlatList data={mocks.products.tables} renderItem={renderItem} {...flatListConfig} />;
}

export function Armchair() {
  const renderItem = useRenderItem();

  return <FlatList data={mocks.products.armchairs} renderItem={renderItem} {...flatListConfig} />;
}

export function Bed() {
  const renderItem = useRenderItem();

  return <FlatList data={mocks.products.beds} renderItem={renderItem} {...flatListConfig} />;
}
