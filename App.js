import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { Ionicons } from '@expo/vector-icons';


import AccountScreen from "./src/Screens/AccountScreen";
import SigninScreen from "./src/Screens/SigninScreen";
import SignupScreen from "./src/Screens/SignupScreen";
import Authhome from './src/Screens/AuthhomeScreen';
import NotifiScreen from './src/Screens/NotifiScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ResolveofAuthScreen from './src/Screens/ResolveofAuthScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import { setNavigator } from './src/NavigationRef';
import {Provider as LocationProvider} from './src/context/LocationConext';
import IconWithBadge from './src/components/Tabbaricons';

/*const NotificationIconWithBadge = props => {
  // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
  return <IconWithBadge {...props} badgeCount={3} />;
};*/

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
    // We want to add badges to home tab icon
  } else if (routeName === 'Notification') {
    iconName = `ios-notifications-outline`;
    //IconComponent = NotificationIconWithBadge;
  }else{
    if(routeName === 'Account')
    {
      iconName = `md-person`;
    }
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};



const switchNavigator = createSwitchNavigator({
 ResolveAuth : ResolveofAuthScreen,
  loginFlow: createStackNavigator({
    authhome: Authhome,
    signup: SignupScreen,
    signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    Home: HomeScreen,
    Notification: NotifiScreen,
    Account: AccountScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return(
    <LocationProvider>
      <AuthProvider>
        <App ref={(navigator)=> {setNavigator(navigator)}} />
      </AuthProvider>
    </LocationProvider>
  );
};