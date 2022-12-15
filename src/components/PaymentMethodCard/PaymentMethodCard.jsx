import React, { useState } from 'react';
import { View } from 'react-native';

import CreditCard from '../CreditCard';
import SwitchWithLabel from '../ShippingAddressCard/SwitchWithLabel';

const container = { margin: 10 };

export default function PaymentMethodCard({ active, ...rest }) {
  const [isEnabled, setIsEnabled] = useState(active);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={container}>
      <CreditCard active={active} {...rest} />
      <SwitchWithLabel
        value={isEnabled}
        label="Use as default payment method"
        onValueChange={toggleSwitch}
      />
    </View>
  );
}
