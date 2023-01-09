import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { routes } from '../../constants';

import HomeTabBar from './HomeTabBar';
import * as Tabs from './tabs';

const Tab = createBottomTabNavigator();

const DEFAULT_TABBAR_HEIGHT = 75;
const screenOptions = { headerShown: false, tabBarStyle: { height: DEFAULT_TABBAR_HEIGHT } };
const sceneContainerStyle = { marginTop: DEFAULT_TABBAR_HEIGHT };

const renderTabBar = (props) => <HomeTabBar {...props} />;

export default function HomeNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={routes.home.POPULAR}
      tabBar={renderTabBar}
      screenOptions={screenOptions}
      sceneContainerStyle={sceneContainerStyle}
    >
      <Tab.Screen name={routes.home.POPULAR} component={Tabs.Popular} />
      <Tab.Screen name={routes.home.CHAIR} component={Tabs.Chair} />
      <Tab.Screen name={routes.home.TABLE} component={Tabs.Table} />
      <Tab.Screen name={routes.home.ARMCHAIR} component={Tabs.Armchair} />
      <Tab.Screen name={routes.home.BED} component={Tabs.Bed} />
    </Tab.Navigator>
  );
}
