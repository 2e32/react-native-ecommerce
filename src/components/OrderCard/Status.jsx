import { Text } from 'react-native';

import { colors, keys } from '../../constants';

const { orderStatus } = keys;

const getStatusColor = (statusKey) => {
  if (statusKey === orderStatus.PROCESSING) return colors.yellow;
  if (statusKey === orderStatus.DELIVERED) return colors.success;
  if (statusKey === orderStatus.CANCELED) return colors.danger;

  return colors.main;
};

export default function Status({ status }) {
  const styles = { color: getStatusColor(status?.key) };

  return <Text style={styles}>{status?.title}</Text>;
}
