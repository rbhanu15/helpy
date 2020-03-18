import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image,  } from 'react-native'

import {Card} from 'react-native-shadow-cards';

import contact from "../img/contact2.png"

function ContactPersons()
{
    
    const [person, setPerson] = useState(30);
    return (
            <Card elevation={20} cornerRadius={19} style={{ marginTop: 20 ,padding: 10, margin: 20 }}>
                
                <View >
                    <Image style={{ resizeMode: 'center', alignSelf: 'center', width: "60%", opacity: 0.4, marginTop: -200 }} source={contact}></Image>
                </View>
                <Text style={{
                    padding: 20,
                    marginTop: -580,
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#2F2E41',
                    textAlign: "center"
                }}>Contact Persons</Text>

                <Text style={{
                    fontSize: 120,
                    marginTop: 30,
                    marginBottom: 30,
                    fontWeight: 'bold',
                    color: '#2F2E41',
                    textAlign: "center"
                }}>{person}</Text>
                
            </Card>
    )
}

export default ContactPersons
