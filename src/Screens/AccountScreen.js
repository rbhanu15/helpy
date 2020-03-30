import React, {useContext, useState}  from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import { Button, Card } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';
import {Context as LocationContext} from '../context/LocationConext';

const AccountScreen = (props) => { 
  const { signout, deleteacc } = useContext(Context);
  const { state } = useContext(LocationContext);
  let { t, locale } = props.screenProps; 
  const contactperson = t('Your_Contact_Persons');
  const myacc = t('My_Account');
  const signoutb = t('signout');
  const deleteAccb = t('deleteAcc');
  const deleteAccTitleb = t('deleteAccTitle');
  const deleteAccDescb = t('deleteAccDesc');
  const yesb = t('yes');
  const nob = t('no');
  let count= 0;
  if(state.count>1)
  {
      count = state.count - 1;
  }
  return <SafeAreaView forceInset={{top:'always'}}>
    <Spacer>
    <Text style={{fontSize:30, alignSelf:'center'}}>{myacc}</Text>
    </Spacer>
    <Spacer>
      <View style={{ paddingTop: 40, display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Text style={{
          padding: 20,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'grey',
        }}>{contactperson}</Text>
        <Text style={{
          fontSize: 60,
          fontWeight: 'bold',
          color: 'black',
        }}>{count}</Text>
      </View>
    </Spacer>
    <Spacer>
       <Button title={signoutb} onPress={signout} />
    </Spacer>
    <Spacer>
      <Button buttonStyle={{backgroundColor: 'red'}} title={deleteAccb} onPress={() => Alert.alert(
        `${deleteAccTitleb}`,
        `${deleteAccDescb}`,
        [
          {text: `${nob}`, onPress: () => console.log('Cancel Pressed') , style: 'cancel'},
          {text: `${yesb}`, onPress: () => deleteacc()},
          
        ],
        { cancelable: false }
      )}/>
    </Spacer>
    
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;