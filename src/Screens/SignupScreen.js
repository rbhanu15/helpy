import React, {useContext} from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView } from 'react-native';
import {Context as Authcontext} from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation, screenProps }) => { 

  const { state, signup, clearErrorMessage } = useContext(Authcontext);
  let { t, locale } = screenProps; 
  const signupbuttom = t('signup');
  const signuptext = t('siguptext');
  const already = t('alreadyhav');
  const passwordtext = t('passtext');

  return (
    <SafeAreaView style={styles.container}>
  <View>
      <NavigationEvents onWillBlur={clearErrorMessage} />
    <AuthForm 
    headerText={signuptext} 
    errorMessage={state.errorMessage} 
    onSubmit={signup}
    buttontext={signupbuttom}
    loadingvalue={false}
    passwordtext={passwordtext}
    />
    <Text style={{marginHorizontal:15, marginBottom:15}}>Durch Klicken auf Registrierung stimmen Sie den Allgemeinen Geschäftsbedingungen zu</Text>
   <NavLink 
   textTitle={already}
   navigatelin="signin"
   />
    </View>
    </SafeAreaView>

  );
};

SignupScreen.navigationOptions = ()=> {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({

  container:{
        flex:1,
        justifyContent: 'center',
        marginBottom:250,

    },
    Image:{
      marginTop:40,
      height:400,
      width:412,
      right:1,
      resizeMode: 'stretch',
      position:'absolute',
      top:310,
      opacity: .8,
      shadowColor: "black",
      shadowOffset: { height: 2},
      shadowOpacity: 0.9,
    },
    link:{
      marginHorizontal:15,
    }

});

export default SignupScreen;
