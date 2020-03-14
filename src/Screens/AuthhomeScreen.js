import React from 'react';
import { StyleSheet, View, TouchableOpacity, Button } from 'react-native'
import {Text} from 'react-native-elements';


const AuthhomeScreen = ({ navigation })=> {
        return (
            <View style={styles.Container}>
                <View elevation={10} style={styles.Textcontainer}> 
                    <Text style={{fontSize:70, fontWeight:'bold',color:'white'}}>Together</Text>
                    <Text style={{fontSize:55, marginLeft:40, color:'white', letterSpacing:1, textDecorationLine:'line-through'}}>We Fight Corona</Text>
                </View>
                <View style={styles.downcontainer}>
                    <TouchableOpacity elevation={10} style={styles.buttom} onPress={() => navigation.navigate('signin')}>
                        <Text style={{color:'black',fontWeight:'bold'}}>
                            Sign In</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity elevation={10} style={styles.buttom} onPress={() => navigation.navigate('signup')}>
                        <Text style={{color:'black',fontWeight:'bold'}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
};

AuthhomeScreen.navigationOptions = ()=> {
    return {
      headerShown: false,
    };
  };
  

const styles = StyleSheet.create({
    Container:{
        display:"flex",
        flex:1,
        backgroundColor: '#f955'
    },
    Textcontainer:{
        margin:25,
        display:"flex",
        flex:2,
        borderRadius:20,
        justifyContent:'space-evenly',
        alignItems:'center',
        alignContent:'stretch',
        backgroundColor:'#FF5F8B',
        shadowColor:'#000000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
    },
    downcontainer:{
        margin:20,
        display:"flex",
        flex:1,
        justifyContent:'center',
    },
    buttom:{
        display:'flex',
        marginVertical:5,
        marginHorizontal:15,
        borderRadius:10,
        height:89,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        shadowColor:'#000000',
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.25,
        shadowRadius: 3.84, 
    }

})

export default AuthhomeScreen;
