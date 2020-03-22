import React, {useEffect, useCallback, useContext, useState} from 'react';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {View, Text} from 'react-native';
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
import { Provider as NotifiProvider } from './src/context/NotificationContext';
//import IconWithBadge from './src/components/IconWithBadge';
import Notificationbadge from './src/components/Notificationbadges';
/*import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
*/
//import {registerFetchTask} from './src/Hooks/Backgroundupdate';

//const INTERVAL_TASKS = 5000;
//const LOCATION_TASK_NAME = "background-location-task";

/*registerFetchTask('teste', () => {
  console.log('Rodando em background');
}, INTERVAL_TASKS);
*/


const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
        // We want to add badges to home tab icon
   
  } else if (routeName === 'Notification') {
    iconName = focused ? `ios-notifications`:`ios-notifications-outline`;
    IconComponent = Notificationbadge;
  }else{
    if(routeName === 'Account')
    {
      iconName = `md-person`;
    }
  }
  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

/*const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-home`;
    
    // We want to add badges to home tab icon
  } else if (routeName === 'Notification') {
    iconName = focused ? `ios-notifications`:`ios-notifications-outline`;
    IconComponent = HomeIconWithBadge;

  }else{
    if(routeName === 'Account')
    {
      iconName = `md-person`;
    }
  }

  // You can return any component that you like here!
  return <Ionicons name={iconName} size={25} color={tintColor} />;
};
*/


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
    <NotifiProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => { setNavigator(navigator) }} />
        </AuthProvider>
      </LocationProvider>
    </NotifiProvider>
  );
};

/*test for background location tracking*/
/**************************************************************************** */
  /*useEffect( () => {
    _startTheTask();
  }, []);

  _startTheTask = async () =>{
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status === "granted") {
      _getLocationAsync();
    } else {
      console.log('errorrrrr')
    }
  }
  _getLocationAsync = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      enableHighAccuracy: true,
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 1,
      timeInterval: 5000
    });
    // watchPositionAsync Return Lat & Long on Position Change
    location = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 1,
        timeInterval: 10000
      },
      newLocation => {
        let { coords } = newLocation;
        // console.log(coords);
        let region = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.045,
          longitudeDelta: 0.045
        };
      },
      error => console.log(error)
    );
    return location;
  };

  /*const startWatching = async () => {
    const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
    
    const { scope } = permissions.location.ios
    //const { status } = await Location.requestPermissionsAsync();
    const permissionStatus = 1;
    if (Platform.OS === 'ios') {
      const { scope } = permissions.location.ios
    } 
    if (status === 'granted' && scope === 'always') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 1 
      });
     }
  };*/
  


/*TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const { locations } = data;
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
   
    console.log("Received new locations for user = ",locations);
  }
});*/
