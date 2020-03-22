import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image } from 'react-native'

function Donate() 
{
    return (
                <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>Support Helpy</Text>

            <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20 }}>
                    We are a team of 3 students from Germany and would be grateful for any support.
                     </Text>

            <TouchableOpacity style={{ borderRadius: 19, padding: 20, marginTop: 20, backgroundColor: "#2F2E41", }} onPress={() => Linking.openURL('https://www.buymeacoffee.com/AliKarami')}>
                <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Buy us a coffee</Text>
            </TouchableOpacity>
                </Card>     

    )
}

export default Donate