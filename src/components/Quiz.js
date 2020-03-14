import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Quiz = () => {

        return (
            <View style={styles.container}>
                <TouchableOpacity>
                <Text style={{fontSize:20, marginBottom:10}}> nCovid-19 Symptoms </Text>
                <Text style={{fontSize:15}}>Watch for symptoms
                    Reported illnesses have ranged from mild symptoms to severe illness and death for confirmed coronavirus disease 2019 (COVID-19) cases.
                    The following symptoms may appear 2-14 days after exposure.
                </Text>
                <Text style={{fontSize:25,marginTop:10}}>
                Fever
                </Text>
                <Text style={{fontSize:25}}>
                Cough
                </Text>
                <Text style={{fontSize:25}}>
                Shortness of breath
                </Text>
                </TouchableOpacity>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
        marginBottom:20,
        marginHorizontal:10,
        borderRadius:30,
        backgroundColor:'white',
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Quiz;