import React, {useState} from 'react'
import { Text, StyleSheet, View , TouchableOpacity, Button} from 'react-native'
import { ConfirmDialog, ProgressDialog} from 'react-native-simple-dialogs';

const Alarm = props => {

    const [dialogVisible, setdialogVisible] = useState(false)
    const [waitTime, setwaitTime] = useState(5)

    
        return (
            <TouchableOpacity onPress={() => setdialogVisible(true)}>
                <View style={styles.card}>
                <Text style={styles.text}>{props.title}</Text>
                    <ConfirmDialog
                        title="Warning"
                        message="Are you 100% sure you have COVID-19? This action cannot be canceled!"
                        visible={dialogVisible}
                        onTouchOutside={() => setdialogVisible(false)}

                        positiveButton={{
                            
                            enable: false,
                            title: "Yes",
                            onPress: () => { console.log('alarm!'); setdialogVisible(false)}
                        }}
                        negativeButton={{
                            title: "Cancel",
                            onPress: () => setdialogVisible(false)
                        }}
                    />
            </View>
                
            </TouchableOpacity>
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
    }
})

export default Alarm;