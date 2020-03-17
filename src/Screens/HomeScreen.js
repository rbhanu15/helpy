import React, { useState } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'
import { Card } from 'react-native-elements'
import Alarm from '../components/alarm';
import Quiz from '../components/Quiz';
import SafeAreaView from 'react-native-safe-area-view';


const HomeScreen = () => {
const [person, setPerson] = useState(0);

        return (
            <SafeAreaView forceInset={{top:'always'}} style={styles.container} >
            <ScrollView style={styles.container}>
                    <View style={{ paddingTop: 40,display: "flex", justifyContent: "center", alignItems: "center"}}>
                 <Text style={{
                     padding: 20,
                    fontSize:20, 
                    fontWeight:'bold',
                    color:'grey',
                    }}>Number of people that i have had contact with: d d</Text>
                <Text style={{
                    fontSize:60, 
                    fontWeight:'bold',
                    color:'black',
                    }}>{person}</Text>
                </View>
                <Alarm 
                        title="I am 100% sure that I have COVID-19."
                />
                <Quiz />
            </ScrollView>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        
        flex:1,
        backgroundColor:'#FFFFFF',
    },
    
})

export default HomeScreen;