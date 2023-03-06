import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './plus.svg';

export default function PlusSvgIcon(props) {
  return <SvgXml xml={svg} width={14} height={14} fill={colors.main} {...props} />;
}
