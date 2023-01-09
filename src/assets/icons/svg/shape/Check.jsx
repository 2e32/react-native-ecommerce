import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './check.svg';

export default function CheckSvgIcon(props) {
  return <SvgXml xml={svg} width={12} height={10} fill={colors.white} {...props} />;
}
