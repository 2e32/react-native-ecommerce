import { View } from 'react-native';

import { colors } from '../constants';

const defaultStyle = {
  borderBottomWidth: 1,
  borderStyle: 'solid',
  borderBottomColor: colors.secondary,
};

export default function Divider({ style, ...rest }) {
  const styles = Object.assign({}, defaultStyle, style);

  return <View style={styles} {...rest} />;
}
