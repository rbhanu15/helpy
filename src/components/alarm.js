import React from 'react'
import { Text, StyleSheet, View , TouchableOpacity} from 'react-native'

const Alarm = props => {

        return (
            <TouchableOpacity style={styles.card} onPress={()=> console.log('alarm!')}>
            <View>
                <Text style={styles.text}>{props.title}!!</Text>
            </View>
            </TouchableOpacity>
        )
    
}

const styles = StyleSheet.create({
    card:{
        marginTop:30,
        marginHorizontal:53,
        width: 300,
        height:300,
        borderWidth:10,
        borderColor:'white',
        borderRadius:90,
        display:'flex',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FF5E5E'
    },
    text:{
        padding:20,
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'white'
    }
})

export default Alarm;