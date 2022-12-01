import { StyleSheet, View, Text } from 'react-native';
import { colors } from '../../constants';

import Devider from '../Devider';

function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

function Description({ children }) {
  return <Text style={styles.description}>{children}</Text>;
}

export default function Card({ title, description }) {
  return (
    <Container>
      <Title>{title}</Title>
      <Devider style={styles.devider} />
      <Description>{description}</Description>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,

    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#000',
    borderRadius: 8,
  },
  devider: {
    marginVertical: 12,
  },
  title: {
    color: colors.main,
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 24,
  },
  description: {
    color: colors.sub,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
});
