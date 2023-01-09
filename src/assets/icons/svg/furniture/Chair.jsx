import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './chair.svg';

export default function ChairSvgIcon(props) {
  return <SvgXml xml={svg} width={48} height={48} fill={colors.sub} {...props} />;
}
