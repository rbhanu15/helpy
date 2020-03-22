import React, {useContext} from 'react';
import {View, StyleSheet, Image, SafeAreaView } from 'react-native';
import {Context as Authcontext} from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({ navigation }) => { 

  const { state, signup, clearErrorMessage } = useContext(Authcontext);

  return (
    <SafeAreaView style={styles.container}>
  <View>
      <NavigationEvents onWillBlur={clearErrorMessage} />
    <AuthForm 
    headerText="Hey, Signup and help the word to fight and destroy Corona Virus" 
    errorMessage={state.errorMessage} 
    onSubmit={signup}
    buttontext="sign up"
    loadingvalue={false}
    />
   <NavLink 
   textTitle="Already have an account? Sign in instead"
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
