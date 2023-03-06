import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './minus.svg';

export default function MinusSvgIcon(props) {
  return <SvgXml xml={svg} width={14} height={2} fill={colors.main} {...props} />;
}
