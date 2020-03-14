import React,{useState, useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Input, Button } from 'react-native-elements';
import Spacer from './Spacer';

const Authform = ({ headerText, errorMessage,onSubmit, buttontext }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
        onPress={()=> onSubmit({email, password})}/>
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