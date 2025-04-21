import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = () => {
    
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontSize: 24, fontWeight: 500 }}>Continue</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AE1D1D',
        paddingVertical: 2,
        paddingHorizontal: 4,
        height: 60,
        width: 255,
        position: 'absolute',
        bottom: 70,
        borderRadius: 20,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    }
})