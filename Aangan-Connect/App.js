import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/Welcome';
import OnBoardingScreens from './src/screens/OnBoardingScreens';

const Stack = createNativeStackNavigator()

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={
        {headerShown:false}
      }
      initialRouteName='welcome'
      >
      <Stack.Screen name="welcome" component={Welcome}/>
      <Stack.Screen name='Onboarding' component={OnBoardingScreens}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
