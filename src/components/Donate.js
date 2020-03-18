import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image } from 'react-native'

function Donate() 
{
    return (
                <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>Donate for Helpy</Text>
                </Card>     

    )
}

export default Donate