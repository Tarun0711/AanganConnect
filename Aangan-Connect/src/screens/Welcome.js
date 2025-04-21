import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Logo from '../../assets/Logo/Logo.png'
import { useNavigation } from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation(); 
  const logoPosition = useRef(new Animated.Value(-200)).current;
  const textPosition = useRef(new Animated.Value(200)).current;
  const TextOpaque = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoPosition, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
    }).start();

    Animated.timing(textPosition, {
      toValue: 0,
      duration: 1500,
      delay: 200, 
      useNativeDriver: true,
    }).start();
    Animated.timing(TextOpaque, {
        toValue: 1,
        duration: 1000,
        delay: 1000, 
        useNativeDriver: true,
      }).start();
      const timer = setTimeout(() => {
        navigation.navigate('Onboarding'); 
    }, 4000);
      return () => clearTimeout(timer); 

    }, [logoPosition, textPosition, TextOpaque]);

  return (
    <View style={styles.container}>
      <Animated.Image 
        source={Logo} 
        style={[styles.logo, { transform: [{ translateX: logoPosition }] }]} 
      />
      <Animated.Text 
        style={[styles.text, { 
            transform: [{ translateY: textPosition }],
            opacity: TextOpaque 
          }]}>
        Your Community Hub for Seamless Living
      </Animated.Text>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "#AE1D1D",
    marginTop: 20,
    fontSize: 18,
    fontWeight:'600'
  }
})
