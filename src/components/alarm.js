import React, {useState, useEffect} from 'react'
import { Text, StyleSheet, View , TouchableOpacity, Button, Image} from 'react-native'
import { ConfirmDialog, ProgressDialog} from 'react-native-simple-dialogs';
import { Card } from 'react-native-shadow-cards';

import ProgressCircle from 'react-native-progress-circle'
import icon from "../img/alarm.png"


const Alarm = props => {

    const [dialogVisible, setdialogVisible] = useState(false)
    
    return (
        <Card elevation={20} cornerRadius={19} style={{  padding: 10, marginLeft: 20, marginRight: 20 }}>
            <Text style={{ padding: 10, alignSelf: 'center', color: "#2F2E41", fontWeight: "bold", fontSize: 30 }}>Hold if you have </Text>
            <Text style={{ padding: 0, alignSelf: 'center', color: "#2F2E41", fontWeight: "bold", fontSize: 30 }}>SARS-CoV-2</Text>
            <TouchableOpacity onLongPress={() => setdialogVisible(true)} style={styles.buttom}>
                <Image source={icon} style={styles.buttomimage} ></Image>
            </TouchableOpacity>

            <ConfirmDialog
                title="Warning"
                message="Are you 100% sure you have COVID-19? This action cannot be canceled!"
                visible={dialogVisible}
                onTouchOutside={() => setdialogVisible(false)}

                positiveButton={{

                    enable: false,
                    title: "Yes",
                    onPress: () => { console.log('alarm!'); setdialogVisible(false) }
                }}
                negativeButton={{
                    title: "Cancel",
                    onPress: () => setdialogVisible(false)
                }}
            />
        </Card>
    )
}

const styles = StyleSheet.create({
    card:{
        padding: 30,
        margin: 40,
        
        height:300,
        borderWidth:5,
        borderColor:'black',
        borderRadius:30,
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FF5E5E',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        elevation: 30,
    },
    text:{
        padding:20,
        fontSize:35,
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
    },
    buttom:{
        display:'flex',
        flex:1,
        margin: 30, 
        alignSelf: 'center',
        borderRadius: 70, 
        backgroundColor: "#FF6366", 
        width: 120, 
        height: 120, 
        borderWidth: 4, 
        borderColor: '#B44747',
        justifyContent:'center',
        paddingBottom:5
    },
    buttomimage:{
        resizeMode: 'contain', 
        alignSelf: 'center',
        flex:0.7,
        opacity:0.6, 
    }
})

export default Alarm