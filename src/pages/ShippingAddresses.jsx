import { useCallback } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import { PageHeader, ShippingAddressCard, AddFab } from '../components';
import { mocks } from '../constants';

export default function ShippingAddresses() {
  const handleAdd = useCallback(() => Alert.alert('Add button pressed'), []);

  return (
    <View style={{ flex: 1 }}>
      <PageHeader>Shipping addresses</PageHeader>

      <ScrollView>
        {Array.isArray(mocks.shippingAddresses) &&
          mocks.shippingAddresses.map((addressInfo) => (
            <ShippingAddressCard key={addressInfo.id} addressInfo={addressInfo} />
          ))}
      </ScrollView>

      <AddFab onPress={handleAdd} />
    </View>
  );
}
