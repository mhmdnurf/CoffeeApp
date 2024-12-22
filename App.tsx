import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import {RootStackParamList} from './src/types/types';
import OnBoardingScreen from './src/screens/OnBoardingScreen';
import BottomTab from './src/components/BottomTab';
import DetailCoffeeScreen from './src/screens/DetailCoffeeScreen';
import OrderScreen from './src/screens/OrderScreen';

export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
          <Stack.Screen name="HomeScreen" component={BottomTab} />
          <Stack.Screen
            name="DetailCoffeeScreen"
            options={{
              headerShown: false,
            }}
            component={DetailCoffeeScreen}
          />
          <Stack.Screen name="OrderScreen" component={OrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
