import React, { useState,useContext,useEffect  } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, Image, AsyncStorage } from 'react-native'
import Alarm from '../components/alarm';
import SafeAreaView from 'react-native-safe-area-view';
import  { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';


//HOC

import {Context as LocationContext} from '../context/LocationConext';
import ContactPerson from '../components/ContactPersons'
import Symptoms from "../components/Symptoms"
import Info from "../components/Info"
import Donate from "../components/Donate"



const HomeScreen = () => {
    const { state, addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);

    const startWatching = async () => {
      try {
          await requestPermissionsAsync();
          await watchPositionAsync({
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 7000,
            distanceInterval: 10 
          }, (location) =>{

          const userposition = {
              "coordinates" : [location.coords.longitude,location.coords.latitude]
          }
          addLocation(userposition);
          });
      } catch(e) {
          setErr(e);
      }
    };

    useEffect(()=>{
      startWatching();
    },[]);

    /*const contacts = await AsyncStorage.getItem('contactpersons');
    const count = JSON.parse(contacts);*/
        return (
            <SafeAreaView forceInset={{top:'always'}} style={styles.container} >
              
                <ScrollView style={styles.container}>
                    {err ? <Text style={{ marginLeft:3,textAlignVertical:'center',textAlign: 'center', fontWeight: "bold", fontSize: 23, justifyContent:'center' }}>Please enable location Services</Text> : null}
                    <ContactPerson contact={state.contactpersons}></ContactPerson>
                    <Alarm title="I am 100% sure that I have COVID-19."  />
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
