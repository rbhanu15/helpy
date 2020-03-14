import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

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