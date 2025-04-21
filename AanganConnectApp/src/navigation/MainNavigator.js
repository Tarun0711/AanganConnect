import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "../screens/Splash";
import Onboarding from "../screens/onBoarding/Onboarding";
import Login from "../screens/AuthScreens/Login";
import SignUp from "../screens/AuthScreens/SignUp";
import SearchSociety from "../screens/AuthScreens/SearchSociety";
import DocumentUpload from "../screens/AuthScreens/DocumentUpload";

const Stack = createStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
                <Stack.Screen name="SearchSociety" component={SearchSociety} options={{ headerShown: false }} />
                <Stack.Screen name="DocumentUpload" component={DocumentUpload} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;