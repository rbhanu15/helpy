import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view';


const NotifiScreen = ()=> {
    
        return (
            <SafeAreaView forceInset={{top:'always'}} style={styles.container} >
            <View>
                <Text style={{padding:20, fontSize:20}}>No one in your Contact Person 
                have corona and you are Healthy. </Text>
            </View>
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

export default NotifiScreen;