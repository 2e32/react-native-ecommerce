import React, { useState } from 'react';
import { View } from 'react-native';

import Card from './Card';
import SwitchWithLabel from './SwitchWithLabel';

const container = { margin: 10 };

export default function ShippingAddressCard({ addressInfo }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={container}>
      <SwitchWithLabel
        value={isEnabled}
        label="Use as the shipping address"
        onValueChange={toggleSwitch}
      />
      <Card title={addressInfo?.recipient} description={addressInfo?.fullAddress} />
    </View>
  );
}
