import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Page from '../pages';

import { colors, routes } from '../constants';

import navbarIcons from '../assets/icons/navbar/index';

const Tab = createBottomTabNavigator();

const iconStyle = { width: 24, height: 24, resizeMode: 'contain' };

const getIconByRoute = (routeName, isActive) => {
  let icon;

  if (routeName === routes.app.HOME) {
    icon = isActive ? navbarIcons.homeFill : navbarIcons.home;
  } else if (routeName === routes.app.FAVORITE) {
    icon = isActive ? navbarIcons.markerFill : navbarIcons.marker;
  } else if (routeName === routes.app.NOTIFICATION) {
    icon = isActive ? navbarIcons.bellFill : navbarIcons.bell;
  } else if (routeName === routes.app.PROFILE) {
    icon = isActive ? navbarIcons.personFill : navbarIcons.person;
  }

  return icon;
};

const screenOptions = ({ route }) => ({
  headerStyle: {
    backgroundColor: colors.white,
  },
  headerTintColor: colors.main,
  headerTitleStyle: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  tabBarIcon: ({ focused }) => {
    const icon = getIconByRoute(route.name, focused);

    return <Image source={icon} style={iconStyle} />;
  },
  tabBarShowLabel: false,
  tabBarStyle: { height: 75 },
});

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={routes.app.HOME} screenOptions={screenOptions}>
        <Tab.Screen name={routes.app.HOME} component={Page.Home} />
        <Tab.Screen name={routes.app.FAVORITE} component={Page.Favorite} />
        <Tab.Screen name={routes.app.NOTIFICATION} component={Page.Notification} />
        <Tab.Screen name={routes.app.PROFILE} component={Page.Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
