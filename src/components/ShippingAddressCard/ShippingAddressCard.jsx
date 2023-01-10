import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Checkbox } from '../inputs';

import Card from './Card';

export default function ShippingAddressCard({ addressInfo }) {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.container}>
      <Checkbox
        checked={isEnabled}
        label="Use as the shipping address"
        style={styles.checkbox}
        onChange={toggleSwitch}
      />
      <Card title={addressInfo?.recipient} description={addressInfo?.fullAddress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  checkbox: {
    marginBottom: 12,
  },
});
