import React, {useContext, useState}  from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, Card } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';
import {Context as LocationContext} from '../context/LocationConext';

const AccountScreen = () => { 
  const { signout} = useContext(Context);
  const { state } = useContext(LocationContext);
  let count= 0;
  if(state.count>1)
  {
      count = state.count - 1;
  }
  return <SafeAreaView forceInset={{top:'always'}}>
    <Spacer>
    <Text style={{fontSize:30, alignSelf:'center'}}>My Account</Text>
    </Spacer>
    <Spacer>
      <View style={{ paddingTop: 40, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          padding: 20,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'grey',
        }}>Number of people that i have had contact with:</Text>
        <Text style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: 'black',
        }}>{count}</Text>
      </View>
    </Spacer>
    <Spacer>
       <Button title="Sign Out" onPress={signout} />
    </Spacer>
    
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;