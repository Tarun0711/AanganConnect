import React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Svg, Path } from 'react-native-svg';
const NavBar = ({ title, onBackPress, style = {} }) => {
    return (
        <View style={[styles.navbar, style]}>
            <Pressable onPress={onBackPress} style={styles.arrowContainer}>
                <Svg xmlns="http://www.w3.org/2000/svg" width="23" height="16" viewBox="0 0 23 16" fill="none">
                    <Path d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM22 9C22.5523 9 23 8.55228 23 8C23 7.44772 22.5523 7 22 7V9ZM1 9H22V7H1V9Z" fill="white" />
                </Svg>
            </Pressable>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#40A4FF',
        paddingHorizontal: 15,
        paddingVertical: 10,
        height: 60,
    },
    arrowContainer: {
        marginRight: 10,
    },
    title: {
        fontSize: 20,
        color: '#FFFFFF',
        fontFamily: 'NicoMoji-Regular',
        fontWeight: '700',
        textAlign: 'center',
        flex: 1,
    },
});