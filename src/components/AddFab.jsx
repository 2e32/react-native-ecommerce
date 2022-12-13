import { View, Text, Pressable } from 'react-native';

import { colors } from '../constants';

import Fab from './Fab';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 55,
  height: 55,
  backgroundColor: colors.white,
  borderRadius: 50,
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 0,
  },
  shadowOpacity: 0.5,
  shadowRadius: 15,
  elevation: 8,
};

export default function AddFab({ onPress }) {
  return (
    <Fab>
      <Pressable onPress={onPress}>
        <View style={style}>
          <Text>+</Text>
        </View>
      </Pressable>
    </Fab>
  );
}
