import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {ImageBackground, Pressable, Text, View, StyleSheet} from 'react-native';
import {RootStackParamList} from '../types/types';

type OnBoardingScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

interface OnBoardingScreen {
  navigation: OnBoardingScreenNavigation;
}

export default function OnBoardingScreen({navigation}: OnBoardingScreen) {
  return (
    <>
      <ImageBackground
        source={require('../assets/images/splash-image.jpg')}
        style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.title}>Enjoy the Best Coffee in Your Hands</Text>
          <Text style={styles.subtitle}>
            Welcome to Cophy, where every cup of coffee is made with love.
          </Text>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={styles.buttonText}>Get Started</Text>
          </Pressable>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 80,
    paddingHorizontal: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
  subtitle: {
    color: '#A6AEBF',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#FFB38E',
    width: '100%',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
  },
});
