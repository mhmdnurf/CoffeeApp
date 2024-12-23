import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  HomeScreen: undefined;
  DetailCoffeeScreen: {
    item: {
      id: string;
      image: ImageSourcePropType;
      title: string;
      description: string;
      price: string;
      category: string;
    };
  };
  OrderScreen: {
    item: {
      id: string;
      image: ImageSourcePropType;
      title: string;
      description: string;
      price: string;
      category: string;
    };
  };
};
