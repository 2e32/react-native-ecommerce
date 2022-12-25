import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes, colors } from '../../constants';

import * as icons from '../../assets/icons/svg/furniture';

import * as Tabs from './tabs';

const Tab = createBottomTabNavigator();

const getIconByRoute = (routeName) => {
  let icon;

  if (routeName === routes.home.POPULAR) {
    icon = icons.ChairSvgIcon;
  } else if (routeName === routes.home.CHAIR) {
    icon = icons.ChairSvgIcon;
  } else if (routeName === routes.home.TABLE) {
    icon = icons.TableSvgIcon;
  } else if (routeName === routes.home.ARMCHAIR) {
    icon = icons.ArmchairSvgIcon;
  } else if (routeName === routes.home.BED) {
    icon = icons.BedSvgIcon;
  }

  return icon;
};

const screenOptions = ({ route }) => ({
  headerShown: false,
  tabBarStyle: {
    height: 75,
    position: 'absolute',
    top: 0,
  },
  tabBarIcon: ({ focused }) => {
    const IconSvg = getIconByRoute(route.name);

    return <IconSvg width={32} height={32} fill={focused ? colors.main : colors.sub} />;
  },
});

export default function HomeNavigator() {
  return (
    <Tab.Navigator initialRouteName={routes.home.POPULAR} screenOptions={screenOptions}>
      <Tab.Screen name={routes.home.POPULAR} component={Tabs.Popular} />
      <Tab.Screen name={routes.home.CHAIR} component={Tabs.Chair} />
      <Tab.Screen name={routes.home.TABLE} component={Tabs.Table} />
      <Tab.Screen name={routes.home.ARMCHAIR} component={Tabs.Armchair} />
      <Tab.Screen name={routes.home.BED} component={Tabs.Bed} />
    </Tab.Navigator>
  );
}
