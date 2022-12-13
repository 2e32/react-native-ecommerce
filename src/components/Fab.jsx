import { View } from 'react-native';

const style = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

// FloatingActionButton
export default function Fab({ children }) {
  return <View style={style}>{children}</View>;
}
