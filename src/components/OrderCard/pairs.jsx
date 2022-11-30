import { StyleSheet, Text } from 'react-native';

import { colors } from '../../constants';

function Pair({ keyChildren, valueChildren }) {
  return (
    <Text>
      <Text style={styles.key}>{keyChildren}</Text>
      <Text style={styles.value}>{valueChildren}</Text>
    </Text>
  );
}

export function Quantity({ value }) {
  return <Pair keyChildren="Quantity: " valueChildren={value} />;
}

export function TotalAmount({ value }) {
  return <Pair keyChildren="Total amount: " valueChildren={`$${value}`} />;
}

const styles = StyleSheet.create({
  key: {
    color: colors.sub,
    fontSize: 16,
    lineHeight: 24,
  },
  value: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
