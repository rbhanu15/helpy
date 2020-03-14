import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => { 
  const { state, signin, clearErrorMessage } = useContext(Context);

 return (
  <View style={styles.container}>
  <NavigationEvents onWillBlur={clearErrorMessage} />
  <AuthForm 
  headerText="Welcome Back" 
  errorMessage={state.errorMessage} 
  onSubmit={signin}
  buttontext="Sign In"
  /> 
 <NavLink 
 textTitle="Dont have an account? Sign Up instead"
 navigatelin="signup"
 />
  </View>
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