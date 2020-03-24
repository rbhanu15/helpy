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
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

// Set the key-value pairs for the different languages you want to support.

const en = {
  My_Account:'my Account',
  signup:'signup',
  signin:'signin',
  signintext: 'welcome Back',
  signout:'signout',
  passtext: 'Password',
  siguptext: 'Hey, Signup and help the world to fight and destroy Corona Virus',
  alreadyhav:'Already have an account? Sign in instead',
  agb:'By clicking on signup you agree to the general terms and conditions',
  donthave:'Dont have an account? Sign Up instead',
  togheter:'Together',
  fight:'We Fight Corona',
  Your_Contact_Persons: 'Your Contact Persons',
  Hold_if_you_have:'Hold if you have SARS-CoV-2',
  Hold: 'Hold',
  Warning: 'Are you 100% sure you have COVID-19? This action cannot be canceled!',
  warningtitle: 'Warning',
  Symptom: 'symptoms',
  fever: 'Fever',
  Cough: 'Cough',
  Shortness: 'Shortness of breath',
  Dificultiy: 'Difficulty breathing',
  symtext: 'Signs and symptoms of COVID-19 may appear two to 14 days after exposure.',
  who: 'Visit who.it for more information',
  worktitel: 'How Helpy works',
  worktext: 'As soon as you press the red button all contact persons will be notified. In this way other persons can prepare and can stay at home.',
  workbutton: 'share Helpy',
  suptitle: 'Support Helpy',
  suptext:'We are a team of 3 students from Germany and would be grateful for any support.',
  coffe:'Buy us a coffee',
  notifications:'No one in your Contact Person have corona and you are Healthy.',
  yes:'Yes',
  no:'No'
};

const de = {
  My_Account:'Mein Konto',
  agb:'Durch Klicken auf Registrierung stimmen Sie den Allgemeinen Geschäftsbedingungen zu',
  togheter:'Gemeinsam',
  fight:'Wir kämpfen gegen Corona',
  signup:'registrieren',
  signin:'Anmelden',
  signintext: 'willkommen zurück',
  passtext: 'Passwort',
  signout:'Abmelden',
  siguptext: 'Hey, melde dich an und hilf dem Welt, das Corona-Virus zu bekämpfen und zu zerstören',
  alreadyhav:'Sie haben bereits ein Konto? Melden Sie sich stattdessen an',
  donthave:'Sie haben noch kein Konto? Melden Sie sich stattdessen an',
  Your_Contact_Persons: 'Deine Kontaktpersonen',
  Hold_if_you_have:'Bei Symptomen gedruckt halten',
  Hold: 'halten',
  Warning:'Sind Sie zu 100% sicher, dass Sie COVID-19 haben? Diese Aktion kann nicht abgebrochen werden!',
  warningtitle: 'Warnung',
  Symptom: 'Symptomen',
  fever: 'Fieber',
  Cough: 'Husten',
  Shortness: 'Kurzatmigkeit',
  Dificultiy: 'Atembeschwerden',
  symtext: 'Anzeichen und Symptome von COVID-19 können zwei bis 14 Tage nach der Exposition auftreten.',
  who:'Besuchen Sie who.it für weitere Informationen',
  worktitel: 'Wie Helpy funktioniert',
  worktext: 'Sobald Sie den roten Knopf drücken, werden alle Kontaktpersonen benachrichtigt. Auf diese Weise können sich andere Personen vorbereiten und zu Hause bleiben.',
  workbutton: 'Teile Helpy',
  suptitle: 'Unterstützen Sie Helpy',
  suptext: 'Wir sind ein Team von 3 Studenten aus dem Ostalbkreis und wären für jede Unterstützung dankbar.',
  coffe:'Kaufen Sie uns einen Kaffee',
  notifications:'Niemand in Ihrer Kontaktperson ist mit Corona-Virus Infiziert und Sie sind gesund.',
  yes:'Ja',
  no:'nein'

};

i18n.fallbacks = true;
i18n.translations = { de, en };




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





const RealApp = createAppContainer(switchNavigator);

export default () => {

  const [ locale ] = useState(Localization.locale);

  /*setLocale = locale => {
    setLocale({ locale });
  };*/

  t = (scope, options) => {
    return i18n.t(scope, { locale: locale, ...options });
  };

  return(
    <NotifiProvider>
      <LocationProvider>
        <AuthProvider>
          <RealApp ref={(navigator) => { setNavigator(navigator) }}
          screenProps={{
            t: this.t,
            locale: locale,
          }}
          />
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


