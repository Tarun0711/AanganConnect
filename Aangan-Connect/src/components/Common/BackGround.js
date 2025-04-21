import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const BackGround = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer1}></View>
            <View style={styles.innerContainer2}></View>
            <View style={styles.innerContainer3}></View>
        </SafeAreaView>
    )
}

export default BackGround

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        opacity:0.8,
        elevation: 1,
    },
    innerContainer1: {
        width: 226,
        height: 225,
        position:'absolute',
        left:-100,
        opacity:0.8,
        top:100,
        backgroundColor: 'linear-gradient(0deg, rgba(64, 164, 255, 0.10) 0%, rgba(49, 25, 150, 0.10) 100%)',
        borderRadius:2000
    },
    innerContainer2: {
        width: 42,
        height: 45,
        position:'absolute',
        opacity:0.8,
        right:150,
        top:200,
        backgroundColor: 'linear-gradient(90deg, rgba(225, 33, 121, 0.10) 0%, rgba(49, 25, 150, 0.10) 100%)',
        borderRadius:2000
    },
    innerContainer3: {
        width: 157,
        opacity:0.8,
        height: 163,
        position:'absolute',
        right:-50,
        top:350,
        backgroundColor: 'linear-gradient(90deg, rgba(225, 33, 121, 0.10) 0%, rgba(49, 25, 150, 0.10) 100%)',
        borderRadius:2000
    }
})