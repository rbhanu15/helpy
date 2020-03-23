import React, {useContext} from 'react';
import {View, StyleSheet, Image, SafeAreaView} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = ({ navigation, screenProps }) => { 
  const { state, signin, clearErrorMessage } = useContext(Context);
  let { t, locale } = screenProps; 
  const signinbuttom = t('signin');
  const signintext = t('signintext');
  const donthave = t('donthave');
  const passwordtext = t('passtext');

 return (
  <SafeAreaView style={styles.container}>
  <View>
  <NavigationEvents onWillBlur={clearErrorMessage} />
  <AuthForm 
  headerText={signintext} 
  errorMessage={state.errorMessage} 
  onSubmit={signin}
  buttontext={signinbuttom}
  passwordtext={passwordtext}
  /> 
 <NavLink 
 textTitle={donthave}
 navigatelin="signup"
 />
  </View>
  </SafeAreaView>
  );
};

SigninScreen.navigationOptions = ()=> {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    marginBottom:290,

},
Image:{
  marginTop:40,
  height:400,
  width:412,
  right:1,
  resizeMode: 'stretch',
  position:'absolute',
  top:305,
  opacity: .8,
  shadowColor: "black",
  shadowOffset: { height: 2},
  shadowOpacity: 0.9,
},

});

export default SigninScreen;