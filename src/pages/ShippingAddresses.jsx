import { View } from 'react-native';

import { PageHeader, ShippingAddressCard } from '../components';
import { mocks } from '../constants';

export default function ShippingAddresses() {
  return (
    <View>
      <PageHeader>Shipping addresses</PageHeader>
      {Array.isArray(mocks.shippingAddresses) &&
        mocks.shippingAddresses.map((addressInfo) => (
          <ShippingAddressCard key={addressInfo.id} addressInfo={addressInfo} />
        ))}
    </View>
  );
}
