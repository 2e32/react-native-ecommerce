import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { colors } from '../../constants';

import Devider from '../Devider';

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

function Header({ children }) {
  return <View style={styles.header}>{children}</View>;
}

function Body({ children }) {
  return <View style={styles.body}>{children}</View>;
}

function HeaderInfo({ number, date }) {
  return (
    <CardRow>
      <Text style={styles.orderNumber}>Order No{number}</Text>
      <Text style={styles.orderDate}>{date}</Text>
    </CardRow>
  );
}
function BodyInfo({ quantity, total, status }) {
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
    <View style={styles.container}>
      <Header>
        <HeaderInfo number={order?.number} date={order?.date} />
      </Header>
      <Devider />
      <Body>
        <BodyInfo quantity={order?.quantity} total={order?.total} status={order?.status} />
      </Body>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 10,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 8,
  },
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  headerInfo: {
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

  body: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 16,
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
