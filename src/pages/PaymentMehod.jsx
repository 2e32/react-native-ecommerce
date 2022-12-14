import { useCallback } from 'react';
import { View, ScrollView, Alert } from 'react-native';

import { PageHeader, PaymentMethodCard, AddFab } from '../components';
import { mocks } from '../constants';

export default function PaymentMehod() {
  const handleAdd = useCallback(() => Alert.alert('Add button pressed'), []);

  return (
    <View style={{ flex: 1 }}>
      <PageHeader>Payment mehod</PageHeader>
      <ScrollView>
        {Array.isArray(mocks.paymentCards) &&
          mocks.paymentCards.map((card, index) => <PaymentMethodCard key={index} {...card} />)}
      </ScrollView>
      <AddFab onPress={handleAdd} />
    </View>
  );
}
