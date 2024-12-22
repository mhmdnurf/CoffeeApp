import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Header from '../components/homescreen/Header';
import PromoCard from '../components/homescreen/PromoCard';
import CategoryContainer from '../components/homescreen/CategoryContainer';
import CoffeeCard from '../components/homescreen/CoffeeCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';

const coffeeData = [
  {
    id: '1',
    image: require('../assets/images/americano.jpg'),
    title: 'Hot Americano',
    description: 'Lorem, ipsum.',
    price: 'Rp 18.000',
    category: 'Americano',
  },
  {
    id: '2',
    image: require('../assets/images/americano.jpg'),
    title: 'Iced Americano',
    description: 'Lorem, ipsum.',
    price: 'Rp 22.000',
    category: 'Americano',
  },
  {
    id: '3',
    image: require('../assets/images/americano.jpg'),
    title: 'Hot Latte',
    description: 'Lorem, ipsum.',
    price: 'Rp 20.000',
    category: 'Latte',
  },
  {
    id: '4',
    image: require('../assets/images/americano.jpg'),
    title: 'Iced Latte',
    description: 'Lorem, ipsum.',
    price: 'Rp 24.000',
    category: 'Latte',
  },
];

const categories = [
  {title: 'All Coffee', backgroundColor: '#DE8F5F', color: 'white'},
  {title: 'Machiato', backgroundColor: '#F4F6FF', color: '#000'},
  {title: 'Latte', backgroundColor: '#F4F6FF', color: '#000'},
  {title: 'Americano', backgroundColor: '#F4F6FF', color: '#000'},
  {title: 'Espresso', backgroundColor: '#F4F6FF', color: '#000'},
];

type HomeScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'HomeScreen'
>;

interface HomeScreen {
  navigation: HomeScreenNavigation;
}

export default function HomeScreen({navigation}: HomeScreen) {
  const [selectedCategory, setSelectedCategory] = useState('All Coffee');

  const filteredCoffeeData =
    selectedCategory === 'All Coffee'
      ? coffeeData
      : coffeeData.filter(item => item.category === selectedCategory);

  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <FlatList
          ListHeaderComponent={
            <>
              <Header />
              <PromoCard />
              <CategoryContainer
                categories={categories}
                onSelectCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </>
          }
          data={filteredCoffeeData}
          renderItem={({item}) => (
            <CoffeeCard
              onPress={() =>
                navigation.navigate('DetailCoffeeScreen', {
                  item,
                })
              }
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.contentContainer}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: 'white',
    minHeight: '100%',
  },
  safeArea: {
    backgroundColor: '#DE8F5F',
  },
});
