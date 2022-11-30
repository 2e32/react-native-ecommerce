import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { colors } from '../../constants';

import Card from './Card';
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

function HeaderContent({ number, date }) {
  return (
    <CardRow>
      <Text style={styles.orderNumber}>Order No{number}</Text>
      <Text style={styles.orderDate}>{date}</Text>
    </CardRow>
  );
}
function BodyContent({ quantity, total, status }) {
  return (
    <View>
      <CardRow style={{ marginBottom: 10 }}>
        <Text>
          <Text style={styles.paramName}>Quantity: </Text>
          <Text style={styles.paramValue}>{quantity}</Text>
        </Text>
        <Text>
          <Text style={styles.paramName}>Total Amount: </Text>
          <Text style={styles.paramValue}>${total}</Text>
        </Text>
      </CardRow>
      <CardRow>
        <Button
          title="Detail"
          color={colors.main}
          onPress={() => Alert.alert('Detail button pressed')}
        />
        <Status status={status} />
      </CardRow>
    </View>
  );
}

export default function OrderCard({ order }) {
  return (
    <Card
      headerContent={<HeaderContent number={order?.number} date={order?.date} />}
      bodyContent={
        <BodyContent quantity={order?.quantity} total={order?.total} status={order?.status} />
      }
    />
  );
}

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
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
