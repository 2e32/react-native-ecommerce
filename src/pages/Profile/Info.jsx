import { ScrollView } from 'react-native';

import InfoItem from './InfoItem';

export default function Info() {
  return (
    <ScrollView>
      <InfoItem title="My orders" description="Already have 10 orders" />
      <InfoItem title="Shipping address" description="3 addresses" />
      <InfoItem title="Payment method" description="You have 2 cards" />
      <InfoItem title="My reviews" description="Reviews for 5 items" />
      <InfoItem title="Settings" description="Notification, Password, FAQ, Contact" />
    </ScrollView>
  );
}
