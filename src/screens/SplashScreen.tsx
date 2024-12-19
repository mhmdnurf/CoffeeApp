import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text} from 'react-native';
import {RootStackParamList} from '../types/types';

type SplashScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'SplashScreen'
>;

interface SplashScreen {
  navigation: SplashScreenNavigation;
}

export default function SplashScreen({navigation}: SplashScreen) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoardingScreen');
    }, 3000);
  }, [navigation]);
  return (
    <>
      <Text>Splash Screen</Text>
    </>
  );
}
