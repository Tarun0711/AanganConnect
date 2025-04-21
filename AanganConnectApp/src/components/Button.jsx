import React from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';

const Button = ({ title, onPress, style = {} }) => {
    return (
        <Pressable style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#AE1D1D',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    buttonText: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'InriaSans-Regular',
        textAlign: 'center',
        fontWeight: '700'
    },
});
