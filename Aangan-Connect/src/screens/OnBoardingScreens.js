import { Text, StyleSheet, TouchableOpacity, View, FlatList, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackGround from '../components/Common/BackGround';
import Ob1 from '../../assets/Images/OB1.png';
import Ob2 from '../../assets/Images/Ob2.png';
import Ob3 from '../../assets/Images/Ob3.png';

const Data = [
  {
    title: 'Real-Time Updates on Announcements',
    subtitle: 'Receive important society updates, event invites, and announcements directly on your phone. Prioritized notifications help you stay on top of urgent matters.',
    image: Ob1,
  },
  {
    title: 'Easy Complaint Management',
    subtitle: 'Facing a problem? Report maintenance issues or concerns through the app and track their status in real-time. Managers will respond and resolve your complaint quickly.',
    image: Ob2,
  },
  {
    title: 'Connect with Your Neighbors',
    subtitle: 'Join discussion forums, create private groups, and stay connected with your neighbors. Whether it’s a book club or a neighborhood watch, stay involved in community discussions.',
    image: Ob3,
  },
];

const OnBoardingScreens = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleNext = () => {
    if (currentIndex < Data.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      setCurrentIndex(currentIndex + 1);
    } else {
      // Handle the "Get Started" action here
      console.log('Get Started clicked');
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subtitle}>{item.subtitle}</Text>
      <Animated.Image source={item.image} style={styles.image} />
    </View>
  );

  const progressHeight = ((currentIndex + 1) / Data.length) * 289;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progress}>
        <View style={[styles.innerprogress, { height: progressHeight }]} />
      </View>
      <FlatList
        data={Data}
        ref={flatListRef}
        vertical
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        onMomentumScrollEnd={(event) => {
          const index = Math.floor(event.nativeEvent.contentOffset.x / event.nativeEvent.layoutMeasurement.width);
          setCurrentIndex(index);
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={{ color: 'white', fontSize: 24, fontWeight: '500' }}>
          {currentIndex === Data.length - 1 ? 'Get Started' : 'Continue'}
        </Text>
      </TouchableOpacity>
      <BackGround />
    </SafeAreaView>
  );
};

export default OnBoardingScreens;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    elevation: 2,
  },
  progress: {
    height: 289,
    width: 14,
    position: 'absolute',
    left: 20,
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  innerprogress: {
    width: 14,
    borderRadius: 10,
    backgroundColor: '#AE1D1D',
  },
  slide: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#AE1D1D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    height: 60,
    width: 255,
    position: 'absolute',
    bottom: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
