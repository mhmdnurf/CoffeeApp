import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../types/types';
import FastImage from 'react-native-fast-image';

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
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <FastImage
            source={require('../assets/images/coffee-cup.gif')}
            style={styles.image}
          />
          <Text style={styles.text}>Cophy</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB38E',
    flex: 1,
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    position: 'absolute',
    bottom: 40,
    fontSize: 40,
    color: 'white',
    fontFamily: 'Nunito-Bold',
  },
});
