import { StyleSheet, View, Text, Image } from 'react-native';

import { colors } from '../constants';

const getFullName = (firstName, lastName) => [firstName, lastName].filter(Boolean).join(' ');

export default function UserBar({ user }) {
  if (!user) return null;

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} alt="" style={styles.avatar} />
      <View style={styles.content}>
        <Text style={styles.title}>{getFullName(user.firstName, user.lastName)}</Text>
        <Text style={styles.description}>{user.email}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  content: {
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  title: {
    color: colors.main,
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    color: colors.sub,
    fontSize: 16,
  },
});
