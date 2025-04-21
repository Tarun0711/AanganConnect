import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const Splash = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={styles.animation}
        source={require('../assets/Lootie/splash1.json')} 
      />
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  animation: {
    width: 250, 
    height: 250,
  },
});
