import {ImageSourcePropType} from 'react-native';

export type RootStackParamList = {
  SplashScreen: undefined;
  OnBoardingScreen: undefined;
  HomeScreen: undefined;
  DetailCoffeeScreen: {
    route: {
      params: {
        item: {
          image: ImageSourcePropType;
          title: string;
          description: string;
          price: string;
        };
      };
    };
  };
};
