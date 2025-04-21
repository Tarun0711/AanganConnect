import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
const SignUp = () => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.signUpText}>LogIn</Text>
                    </View>
                    <View style={{ marginTop: 28 }}>
                        <Text style={styles.appTitle}>AanganConnect</Text>
                    </View>
                    <View style={{ marginTop: 23 }}>
                        <Text style={styles.descriptionText}>
                            Enter Email and Password to login into the application
                        </Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.labelText}>Enter Email</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="abc@gmail.com"
                                placeholderTextColor="#D9D9D9"
                            />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.labelText}>Enter Your Name</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="John Doe"
                                placeholderTextColor="#D9D9D9"
                            />
                        </View>
                    </View>
                    <View style={styles.inputGroupRow}>
                        <View style={{ width: "45%" }}>
                            <Text style={styles.labelText}>Enter Block No</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Block A"
                                    placeholderTextColor="#D9D9D9"
                                />
                            </View>
                        </View>
                        <View style={{ width: "45%" }}>

                            <Text style={styles.labelText}>Enter Residence No</Text>
                            <View style={styles.inputWrapper}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="C-12312"
                                    placeholderTextColor="#D9D9D9"
                                />
                            </View>
                        </View>

                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.labelText}>Enter Password</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="**************"
                                placeholderTextColor="#40A4FF"
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={styles.inputGroup}>
                        <Text style={styles.labelText}>Confirm Password</Text>
                        <View style={styles.inputWrapper}>
                            <TextInput
                                style={styles.input}
                                placeholder="**************"
                                placeholderTextColor="#40A4FF"
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10, display: 'flex', flexDirection: 'row', marginTop: 30 }}>
                        <BouncyCheckbox
                            size={25}
                            fillColor="#AE1D1D"
                            unfillColor="#BA000029"
                            isChecked={isChecked}
                            onPress={(isChecked) => setIsChecked(isChecked)}
                        />
                        <Text style={styles.termsText}>
                            I agreed with the <Text style={{ color: '#40A4FF' }}>terms and conditions</Text>
                        </Text>
                    </View>
                    <View style={{ display: 'flex', marginTop: 50, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: '50%', justifyContent: 'center', alignContent: 'center' }}>
                            <Button title='Signup' />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>

    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flex: 1,
        padding: 20,
    },
    signUpText: {
        textDecorationLine: 'underline',
        color: '#AE1D1D',
        textAlign: 'right',
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600',
        fontFamily: 'InriaSans-Regular',
    },
    appTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'NicoMoji-Regular',
    },
    descriptionText: {
        fontWeight: '600',
        lineHeight: 22,
        fontSize: 18,
        fontFamily: 'InriaSans-Regular',
        color: '#333',
    },
    inputGroup: {
        marginTop: 30,
    },
    inputGroupRow: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        gap: 20,
        justifyContent: 'space-between'
    },
    labelText: {
        fontFamily: 'InriaSans-Regular',
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5,
        color: '#000',
        marginLeft: 10
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
    forgotPasswordText: {
        fontFamily: 'InriaSans-Regular',
        fontSize: 16,
        color: '#40A4FF',
        textAlign: 'right',
    },
    termsText: {
        fontFamily: 'InriaSans-Regular',
        fontSize: 14,
        color: '#000',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 22,
        textAlign: 'left',

    },
    checkboxContainer: {
        flexDirection: 'row',
    },
    checkbox: {
    },
});
