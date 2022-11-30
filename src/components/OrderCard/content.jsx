import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { colors } from '../../constants';

import Status from './Status';

const defaultRowStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

function CardRow({ children, style, ...rest }) {
  const styles = Object.assign({}, defaultRowStyle, style);

  return (
    <View style={styles} {...rest}>
      {children}
    </View>
  );
}

export function HeaderContent({ number, date }) {
  return (
    <CardRow>
      <Text style={styles.orderNumber}>Order No{number}</Text>
      <Text style={styles.orderDate}>{date}</Text>
    </CardRow>
  );
}

export function BodyContent({ quantity, total, status }) {
  return (
    <>
      <CardRow>
        <Text>
          <Text style={styles.paramName}>Quantity: </Text>
          <Text style={styles.paramValue}>{quantity}</Text>
        </Text>
        <Text>
          <Text style={styles.paramName}>Total Amount: </Text>
          <Text style={styles.paramValue}>${total}</Text>
        </Text>
      </CardRow>
      <CardRow style={{ marginTop: 32 }}>
        <Button
          title="Detail"
          color={colors.main}
          onPress={() => Alert.alert('Detail button pressed')}
        />
        <Status status={status} />
      </CardRow>
    </>
  );
}

const styles = StyleSheet.create({
  orderNumber: {
    color: colors.main,
    fontSize: 16,
    lineHeight: 24,
  },
  orderDate: {
    color: colors.sub,
    fontSize: 14,
    lineHeight: 20,
  },

  paramName: {
    color: colors.sub,
    fontSize: 16,
    lineHeight: 24,
  },
  paramValue: {
    color: colors.main,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
});
