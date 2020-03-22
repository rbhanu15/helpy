import React, { useContext, useState, useEffect } from 'react'
import { Text, StyleSheet, View, FlatList,TouchableOpacity, Image } from 'react-native'
import { NavigationEvents } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { ListItem } from 'react-native-elements';
import { Context as NotificationContext } from '../context/NotificationContext';
import notifiphoto from "../img/notifphoto.png";


const NotifiScreen = ({ navigation })=> {
    const { state, fetchNotification } = useContext(NotificationContext);
    //console.log([state]);
    //console.log(notifi);
    let count = state.notification;
    //console.log(count);
    useEffect
    return (
            <SafeAreaView forceInset={{top:'always'}} style={styles.container} >
            <NavigationEvents onWillFocus={fetchNotification} />
            {count ? <FlatList
                    data={[state]}
                    keyExtractor={ ( item, index) => 'item._id'+index}
                    renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={{margin:20, flex:1, display:'flex'}}>
                        <ListItem chevron title={item.notification} />
                        </TouchableOpacity>
                    );
                    }}/>
                    : <View style={styles.card}>
                    <Text style={{padding:20, fontSize:20}}>No one in your Contact Person 
                    have corona and you are Healthy. </Text>
                    <Image style={styles.image}source={notifiphoto}></Image>  
                </View>
            }
            </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flex:1,
        backgroundColor:'#F3F3F3',
    },
    card:{
        backgroundColor:'white',
        flex:1, 
        display:'flex', 
        padding: 10,
        margin:20,
        borderRadius:19
    },
    image:{
            width: null,
            resizeMode: 'contain',
            height: 400
    }
})

export default NotifiScreen;