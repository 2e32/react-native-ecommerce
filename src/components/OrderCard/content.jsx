import { StyleSheet, View, Text, Button, Alert } from 'react-native';

import { colors } from '../../constants';

import Status from './Status';
import { Quantity, TotalAmount } from './pairs';

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
      <Text style={styles.title}>Order No{number}</Text>
      <Text style={styles.subtitle}>{date}</Text>
    </CardRow>
  );
}

export function BodyContent({ quantity, total, status }) {
  return (
    <>
      <CardRow>
        <Quantity value={quantity} />
        <TotalAmount value={total} />
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
  title: {
    color: colors.main,
    fontSize: 16,
    lineHeight: 24,
  },
  subtitle: {
    color: colors.sub,
    fontSize: 14,
    lineHeight: 20,
  },
});
