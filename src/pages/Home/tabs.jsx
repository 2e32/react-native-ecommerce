import { View, ScrollView, Text } from 'react-native';

function TabContainer({ children }) {
  return <ScrollView>{children}</ScrollView>;
}

export function Popular() {
  return (
    <TabContainer>
      <Text>Popular</Text>
    </TabContainer>
  );
}

export function Chair() {
  return (
    <TabContainer>
      <Text>Chair</Text>
    </TabContainer>
  );
}

export function Table() {
  return (
    <TabContainer>
      <Text>Table</Text>
    </TabContainer>
  );
}

export function Armchair() {
  return (
    <TabContainer>
      <Text>Armchair</Text>
    </TabContainer>
  );
}

export function Bed() {
  return (
    <TabContainer>
      <Text>Bed</Text>
    </TabContainer>
  );
}
