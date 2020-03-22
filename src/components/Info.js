import React, { Component } from 'react'
import { Card } from 'react-native-shadow-cards';
import { Text, StyleSheet, View, Linking, Share, Button, TouchableOpacity, Image } from 'react-native'

function Info() {

    function onShare() {
        try {
            const result = Share.share({
                title: 'Download Helpy to fight against Corona',
                message: 'https://helpy-landing.now.sh/',
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        
        <Card elevation={20} cornerRadius={19} style={{ padding: 30, margin: 20, marginBottom: 0 }}>
                    <Text style={{ fontSize: 30, marginBottom: 10, textAlign: 'center', fontWeight: "bold" }}>How Helpy works</Text>

                    <Text style={{ fontSize: 20, textAlign: 'justify', paddingTop: 20}}>
                    As soon as you press the red 
                        button all contact persons 
                        will be notified. 
                        In this way other persons can 
                        prepare and can stay at home.         
                     </Text>

            <TouchableOpacity style={{ borderRadius: 19, padding: 20, marginTop: 20, backgroundColor: "#2F2E41", }} onPress={() => onShare()}>
                <Text style={{ fontSize: 15, textAlign: 'center', fontWeight: "bold", color: 'white' }} >Share Helpy</Text>
                    </TouchableOpacity>
                </Card>     
    )
}

export default Info