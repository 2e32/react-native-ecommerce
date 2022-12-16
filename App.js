import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as Page from './src/pages';

import { colors } from './src/constants';

import navbarIcons from './src/assets/icons/navbar/index.js';

const Tab = createBottomTabNavigator();

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
    let icon;

    if (route.name === 'Home') {
      icon = focused ? navbarIcons.homeFill : navbarIcons.home;
    } else if (route.name === 'Favorite') {
      icon = focused ? navbarIcons.markerFill : navbarIcons.marker;
    } else if (route.name === 'Notification') {
      icon = focused ? navbarIcons.bellFill : navbarIcons.bell;
    } else if (route.name === 'Profile') {
      icon = focused ? navbarIcons.personFill : navbarIcons.person;
    }

    return (
      <Image
        source={icon}
        style={{
          width: 24,
          height: 24,
          resizeMode: 'contain',
        }}
      />
    );
  },
  tabBarShowLabel: false,
  tabBarStyle: { height: 75 },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Page.Home} />
        <Tab.Screen name="Favorite" component={Page.Favorite} />
        <Tab.Screen name="Notification" component={Page.Notification} />
        <Tab.Screen name="Profile" component={Page.Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
