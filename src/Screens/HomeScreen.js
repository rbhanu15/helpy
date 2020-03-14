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
                <Card>
                 <Text style={{
                    fontSize:20, 
                    fontWeight:'bold',
                    color:'grey',
                    display:"flex"
                    }}>My Contact Persons:</Text>
                <Text style={{
                    fontSize:60, 
                    fontWeight:'bold',
                    color:'black',
                    display:"flex"
                    }}>{person}</Text>
                </Card>
                <Alarm 
                title="I have the Symptoms and it is very likely that I have it. Notificate my Contact Person"
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
        backgroundColor:'#F3F3F3',
    },
    
})

export default HomeScreen;