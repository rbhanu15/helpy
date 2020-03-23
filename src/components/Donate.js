import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image } from 'react-native'

function Donate(props) {
    const title = props.title;
    const text = props.text;
    const coffe = props.coffe;

    return (
        <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
            <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>{title}</Text>

            <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20 }}>
                {text}
            </Text>

            <TouchableOpacity style={{ borderRadius: 19, padding: 20, marginTop: 20, backgroundColor: "#2F2E41", }} onPress={() => Linking.openURL('https://www.buymeacoffee.com/AliKarami')}>
                <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold", color: 'white' }}>{coffe}</Text>
            </TouchableOpacity>
        </Card>

    )
}

export default Donate
