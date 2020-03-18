import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';


import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image, } from 'react-native'

function Symptoms(){
        return (

                <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>Symptoms</Text>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems: 'center', paddingTop: 20}}>
                        <Card elevation={20} cornerRadius={19} style={{ padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#575A89" }}>
                            <Text style={{ paddingTop: 40, paddingBottom: 40, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Fever</Text>
                        </Card>
                        <Card elevation={20} cornerRadius={19} style={{ padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#FFB8B8" }}>
                            <Text style={{ paddingTop: 40, paddingBottom: 40, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Cough</Text>
                        </Card>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Card elevation={20} cornerRadius={19} style={{ padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#2F2E41" }}>
                            <Text style={{ paddingTop: 30, paddingBottom: 30, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Shortness of breath</Text>
                        </Card>
                        <Card elevation={20} cornerRadius={19} style={{ padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#FFFFFF" }}>
                            <Text style={{ paddingTop: 30, paddingBottom: 30, fontSize: 20, textAlign: 'center', fontWeight: "bold" }}>Difficulty breathing</Text>
                        </Card>
                    </View>

                    <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20}}>
                        Signs and symptoms of COVID-19 may appear two to 14 days after exposure.
                    </Text>

                    <Card elevation={20} cornerRadius={19} style={{ padding: 20, marginTop: 20, width: 310, backgroundColor: "#FFFFFF" }}>
                        <Text style={{ paddingTop: 0, paddingBottom: 0, fontSize: 15, textAlign: 'center', fontWeight: "bold" }}>Visit who.it for more information</Text>
                    </Card>
                </Card>     

        )
}

export default Symptoms