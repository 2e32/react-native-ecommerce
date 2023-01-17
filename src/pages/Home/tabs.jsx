import { FlatList } from 'react-native';

import { mocks, colors } from '../../constants';

import ProductCard from './ProductCard';

const keyExtractor = (item) => item.id;
const renderItem = ({ item }) => (
  <ProductCard title={item.name} image={item.image} price={item.price} />
);

const flatListConfig = {
  numColumns: 2,
  style: {
    backgroundColor: colors.white,
  },
  keyExtractor,
  renderItem,
};

export function Popular() {
  return <FlatList data={mocks.products.popular} {...flatListConfig} />;
}

export function Chair() {
  return <FlatList data={mocks.products.chairs} {...flatListConfig} />;
}

export function Table() {
  return <FlatList data={mocks.products.tables} {...flatListConfig} />;
}

export function Armchair() {
  return <FlatList data={mocks.products.armchairs} {...flatListConfig} />;
}

export function Bed() {
  return <FlatList data={mocks.products.beds} {...flatListConfig} />;
}
