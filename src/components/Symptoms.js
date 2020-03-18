import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image, } from 'react-native'


function Symptoms(){
        return (

                <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>Symptoms</Text>

                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'center',alignItems: 'center', paddingTop: 20}}>
                        <View style={{ borderRadius:19,padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#575A89" }}>
                            <Text style={{ paddingTop: 40, paddingBottom: 40, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Fever</Text>
                        </View>
                        <View style={{ borderRadius:19,padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#FFB8B8" }}>
                            <Text style={{ paddingTop: 40, paddingBottom: 40, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Cough</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ borderRadius:19,padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#2F2E41" }}>
                            <Text style={{ paddingTop: 30, paddingBottom: 30, fontSize: 20, textAlign: 'center', fontWeight: "bold", color: 'white' }}>Shortness of breath</Text>
                        </View>
                        <View style={{ borderRadius:19, padding: 20, margin: 10, width: 150, height: 150, backgroundColor: "#FFFF6F" }}>
                            <Text style={{ paddingTop: 30, paddingBottom: 30, fontSize: 20, textAlign: 'center', fontWeight: "bold" }}>Difficulty breathing</Text>
                        </View>
                    </View>

                    <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20}}>
                        Signs and symptoms of COVID-19 may appear two to 14 days after exposure.
                    </Text>

                    <View style={{ borderRadius:19 ,padding: 20, marginTop: 20, backgroundColor: "#2F2E41",  }}>
                        <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold", color:'white' }}>Visit who.it for more information</Text>
                    </View>
                </Card>     

        )
}

export default Symptoms