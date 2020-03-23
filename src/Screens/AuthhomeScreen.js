import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native'
import {Text} from 'react-native-elements';


const AuthhomeScreen = ({ navigation, screenProps  })=> {
    let { t, locale } = screenProps; 
    const signinbuttom = t('signin');
    const signupbuttom = t('signup');
    const Together = t('togheter');
    const Fight = t('fight');
        return (
            <View style={styles.Container}>
                <View elevation={10} style={styles.Textcontainer}> 
                    <Text style={{fontSize:45, fontWeight:'bold',color:'white'}}>{Together}</Text>
                    <Text style={{fontSize:35 ,marginHorizontal:20,marginTop:10, color:'white', letterSpacing:1,}}>{Fight}
                    </Text>
                   
                </View>
                <View style={styles.downcontainer}>
                    <TouchableOpacity elevation={10} style={styles.buttom} onPress={() => navigation.navigate('signin')}>
                        <Text style={{color:'black',fontWeight:'bold'}}>
                            {signinbuttom}</Text>
                    </TouchableOpacity>
                   
                    <TouchableOpacity elevation={10} style={styles.buttom} onPress={() => navigation.navigate('signup')}>
                        <Text style={{color:'black',fontWeight:'bold'}}>
                        {signupbuttom}
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
        //'#'
    },
    Textcontainer:{
        margin:25,
        display:"flex",
        flex:2,
        borderRadius:20,
        //justifyContent:'space-evenly',
        justifyContent:'center',
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
        /*borderColor:'#FF6366',
        borderLeftWidth:3,
        borderRightWidth:3,*/
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
