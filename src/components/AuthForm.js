import React,{useState, useContext,useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const Authform = ({ headerText, errorMessage,onSubmit, buttontext }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userposition, setloc] = useState('');
    
    useEffect(()=>{
        _getLocationAsync();
      },[]);
    
    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
          console.log('error permission not granted')
        }

        let location = await Location.getCurrentPositionAsync({});
        const userposition = {
            "type" : "Point",
            "coordinates" : [location.coords.longitude,location.coords.latitude],
        }
        setloc(userposition);
        //console.log(userposition)
      };

    return(
        <>
        <Spacer>
         <Text h3>{headerText}</Text>
        </Spacer>
        <Input label="Email" 
        value={email} 
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        />
        <Spacer />
        <Input label="Password" 
        value={password} 
        onChangeText={setPassword} 
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        />
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text>: null}
        <Spacer>
        <Button 
        title={buttontext} 
        onPress={()=> onSubmit({email, password,userposition})}/>
        </Spacer>
        </>
    );
};

const styles = StyleSheet.create({
    errorMessage:{
        fontSize:16,
        color:'red',
        marginLeft:15
      },
});

export default Authform;