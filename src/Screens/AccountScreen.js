import React, {useContext, useState}  from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { Button, Card } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from '../components/Spacer';
import {Context} from '../context/AuthContext';

const AccountScreen = () => { 
  const { state, signout} = useContext(Context);
  const [person, setPerson] = useState(0);

  return <SafeAreaView forceInset={{top:'always'}}>
    <Spacer>
    <Text style={{fontSize:20, alignSelf:'center'}}>My Account</Text>
    </Spacer>
    <Spacer>
    <Card>
                 <Text style={{
                    fontSize:20, 
                    fontWeight:'bold',
                    color:'grey',
                    display:"flex"
                    }}>My Contact Persons:</Text>
                <Text style={{
                    fontSize:60, 
                    fontWeight:'bold',
                    color:'black',
                    display:"flex"
                    }}>{person}</Text>
                </Card>
    </Spacer>
    <Spacer>
       <Button title="Sign Out" onPress={signout} />
    </Spacer>
    
    </SafeAreaView>
};

const styles = StyleSheet.create({});

export default AccountScreen;