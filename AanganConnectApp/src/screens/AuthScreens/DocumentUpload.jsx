import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, Modal } from 'react-native';
import NavBar from '../../components/NavBar';
import BulbSvg from './SVGs/BulbSvg';
const DocumentUpload = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavBar title="AanganConnect" />
            <View style={{ padding: 20 }}>
                <View style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                    <View style={{}}>
                        <Text style={styles.inputText}>Explore App</Text>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 30,
                    backgroundColor: '#F4F6FF',
                    borderRadius: 5,
                    padding:10
                }}>
                    <BulbSvg />
                    <Text style={styles.textSyle}><Text style={{ fontWeight: 'bold' }}>Please Note:</Text> Please Upload some document so that we can verify you,its for safety purpose only.</Text>
                </View>
            </View>
        </View>
    );
};

export default DocumentUpload;

const styles = StyleSheet.create({
    input: {
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 16,
        fontFamily: 'InriaSans-Regular',
        color: '#40A4FF',
        borderWidth: 1,
        borderColor: 'rgba(233, 233, 233, 0.27)',
        fontWeight: '400',
        lineHeight: 22,
    },
    inputWrapper: {
        borderRadius: 10,
        backgroundColor: 'rgba(233, 233, 233, 0.27)',
        shadowColor: '#40A4FF',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    inputText: {
        fontSize: 16,
        fontFamily: 'InriaSans-Regular',
        fontWeight: '400',
        marginBottom: 5,
        textAlign: 'right',
        color: '#386BF6',
        textDecorationLine: 'underline'
    },
    textSyle: {
        fontSize: 12,
        fontFamily: 'InriaSans-Regular',
    }
});