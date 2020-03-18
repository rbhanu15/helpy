import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image } from 'react-native'

function Info() {
    return (
        <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>How Helpy works</Text>

                   

                    <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20}}>
                    As soon as you press the red 
                        button all contact persons 
                        will be notified. 
                        In this way other persons can 
                        prepare                    
                     </Text>

                    <TouchableOpacity style={{ borderRadius:19 ,padding: 20, marginTop: 20, backgroundColor: "#2F2E41",  }} onPress={()=>console.log('share')}>
                        <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold", color:'white' }}>Share Helpy</Text>
                    </TouchableOpacity>
                </Card>     
    )
}

export default Info