import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image } from 'react-native'
import Alarm from '../components/alarm';
import Quiz from '../components/Quiz';
import { Card } from 'react-native-shadow-cards';
import SafeAreaView from 'react-native-safe-area-view';

//HOC


import ContactPerson from '../components/ContactPersons'
import Symptoms from "../components/Symptoms"
import Info from "../components/Info"
import Donate from "../components/Donate"

const HomeScreen = () => {


        return (
            <SafeAreaView forceInset={{top:'always'}} style={styles.container} >
                <ScrollView style={styles.container}>
                    <View style={{ marginTop: 20, marginLeft: 20, backgroundColor: "white", width: 80,height:40, borderRadius:19, backgroundColor:'white',display:'flex',flexDirection:'column' }}>
                        <Text style={{ marginLeft:3,padding:5,textAlignVertical:'center',textAlign: 'center',  color: "#FF6366", fontWeight: "bold", fontSize: 23, justifyContent:'center' }}>helpy</Text>
                    </View>
                    <ContactPerson></ContactPerson>
                    <Alarm title="I am 100% sure that I have COVID-19." />
                    <Symptoms></Symptoms>
                    <Info></Info>
                    <Donate></Donate>
                </ScrollView>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        
        flex:1,
        backgroundColor:'#DDDEE8',
    },
})

export default HomeScreen;