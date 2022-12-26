import { SvgXml } from 'react-native-svg';

import { colors } from '../../../../constants';

import svg from './star.svg';

export default function StarSvgIcon(props) {
  return <SvgXml xml={svg} width={24} height={24} stroke={colors.sub} strokeWidth={1} {...props} />;
}
