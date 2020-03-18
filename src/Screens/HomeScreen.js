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
                    <Card elevation={20} cornerRadius={19} style={{ marginTop: 20, padding: 5, marginLeft: 20, backgroundColor: "white", width: 80 }}>
                        <Text style={{ textAlign: 'center',  color: "#FF6366", fontWeight: "bold", fontSize: 23 }}>helpy</Text>
                    </Card>
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