import React from 'react';
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Header from '../components/detail-coffee/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import Banner from '../components/detail-coffee/Banner';
import Content from '../components/detail-coffee/Content';
import BottomBar from '../components/detail-coffee/BottomBar';

type DetailCoffeeNavigation = StackNavigationProp<
  RootStackParamList,
  'DetailCoffeeScreen'
>;

interface DetailCoffeeScreen {
  navigation: DetailCoffeeNavigation;
  route: {
    params: {
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
}
export default function DetailCoffeeScreen({
  route,
  navigation,
}: DetailCoffeeScreen) {
  const {item} = route.params;
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <Header onPress={() => navigation.goBack()} />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Banner source={item.image} />
          <Content coffeeName={item.title} />
        </ScrollView>
        <BottomBar
          price={item.price}
          onPressBuyNow={() =>
            navigation.navigate('OrderScreen', {
              item: {
                id: item.id,
                image: item.image,
                title: item.title,
                description: item.description,
                price: item.price,
                category: item.category,
              },
            })
          }
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  scrollViewContent: {
    paddingBottom: 175,
  },
});
