import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './table.svg';

export default function TableSvgIcon(props) {
  return <SvgXml xml={svg} width={48} height={48} fill={colors.sub} {...props} />;
}
