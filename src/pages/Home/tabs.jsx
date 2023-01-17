import { StyleSheet, View, ScrollView, Text, FlatList } from 'react-native';

import { mocks, colors } from '../../constants';

import ProductCard from './ProductCard';

const keyExtractor = (item) => item.id;
const renderItem = ({ item }) => (
  <ProductCard title={item.name} image={item.image} price={item.price} />
);

export function Popular() {
  return (
    <FlatList
      data={mocks.products.popular}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      style={styles.list}
    />
  );
}

function TabContainer({ children }) {
  return <ScrollView>{children}</ScrollView>;
}

export function Chair() {
  return (
    <FlatList
      data={mocks.products.chairs}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      style={styles.list}
    />
  );
}

export function Table() {
  return (
    <FlatList
      data={mocks.products.tables}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      style={styles.list}
    />
  );
}

export function Armchair() {
  return (
    <FlatList
      data={mocks.products.armchairs}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      style={styles.list}
    />
  );
}

export function Bed() {
  return (
    <FlatList
      data={mocks.products.beds}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      numColumns={2}
      style={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: colors.white,
  },
});
