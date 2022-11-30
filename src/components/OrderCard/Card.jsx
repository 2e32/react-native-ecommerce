import { StyleSheet, View } from 'react-native';

import Devider from '../Devider';

function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

function Header({ children }) {
  return <View style={styles.header}>{children}</View>;
}

function Body({ children }) {
  return <View style={styles.body}>{children}</View>;
}

export default function Card({ headerContent, bodyContent }) {
  return (
    <Container>
      <Header>{headerContent}</Header>
      <Devider />
      <Body>{bodyContent}</Body>
    </Container>
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
  body: {
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
});
