import { View, Text } from 'react-native';

import { PageHeader, OrderCard } from '../components';
import { mocks } from '../constants';

export default function Orders() {
  return (
    <View>
      <PageHeader>My orders</PageHeader>
      <Text>Delivered</Text>
      {Array.isArray(mocks.orders) &&
        mocks.orders.map((order) => <OrderCard key={order.id} order={order} />)}
    </View>
  );
}
