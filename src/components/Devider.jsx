import { View } from 'react-native';

import { colors } from '../constants';

const styles = {
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderBottomColor: colors.secondary,
};

export default function Devider() {
  return <View style={styles} />;
}
