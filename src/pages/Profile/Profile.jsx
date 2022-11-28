import { View } from 'react-native';

import { PageHeader, UserBar } from '../../components';
import { mocks } from '../../constants';

import List from './Info';

export default function Profile() {
  return (
    <View>
      <PageHeader>Profile</PageHeader>
      <UserBar user={mocks.user} />
      <List />
    </View>
  );
}
