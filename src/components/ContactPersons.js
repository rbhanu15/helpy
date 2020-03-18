import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image  } from 'react-native'

//import {Card} from 'react-native-shadow-cards';

import contact from "../img/contact2.png"

function ContactPersons()
{
    const [person, setPerson] = useState(30);
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={contact}></Image>  
            
            <Text style={{
                    padding: 20,
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#2F2E41',
                    textAlign: "center"
                }}>Your Contact Persons</Text>

                <Text style={{
                    fontSize: 120,
                    marginBottom: 30,
                    fontWeight: 'bold',
                    color: '#2F2E41',
                    textAlign: "center"
                }}>{person}</Text>                     
        </View>  

    )
}
const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        flex:1, 
        display:'flex', 
        padding: 10,
        margin:20,
        borderRadius:19
    },
    image:{
            width: null,
            resizeMode: 'contain',
            height: 220
    }
});

export default ContactPersons
/*<Card elevation={20} cornerRadius={19} style={{ marginTop: 20 ,padding: 10, margin: 20 }}>
                    <Image style={{ //resizeMode: 'center', alignSelf: 'center', width: "60%", opacity: 0.4, marginTop: -200 
}} source={contact}>

            </Card>*/