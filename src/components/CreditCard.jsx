import { StyleSheet, View, Text } from 'react-native';

import { colors } from '../constants';

const formatExpity = (date) => {
  if (!date) return null;

  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const formattedMonth = String(month).padStart(2, '0');
  const formattedYear = String(year).slice(-2);

  return `${formattedMonth}/${formattedYear}`;
};

function CardRow({ children }) {
  return <View style={styles.row}>{children}</View>;
}

function CardField({ label, value }) {
  return (
    <View>
      <Text style={styles.field.label}>{label}</Text>
      <Text style={styles.field.value}>{value}</Text>
    </View>
  );
}

export default function CreditCard(props) {
  const { number, issuingNetwork, cardHolder, expiry, active } = props;

  return (
    <View style={[styles.container, active && styles.active]}>
      <Text style={styles.logo}>{issuingNetwork}</Text>
      <Text style={styles.number}>{number}</Text>
      <CardRow>
        <CardField label="Card Holder Name" value={cardHolder} />
        <CardField label="Expiry Date" value={formatExpity(expiry)} />
      </CardRow>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#999',
    borderRadius: 8,
  },
  active: {
    backgroundColor: colors.main,
  },
  logo: {
    position: 'absolute',
    top: 20,
    left: 24,
    color: colors.white,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  number: {
    marginTop: 42,
    marginBottom: 26,
    color: colors.white,
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    letterSpacing: 2,
  },
  field: {
    label: {
      color: colors.white,
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 18,
      opacity: 0.8,
    },
    value: {
      color: colors.white,
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
  },
});
