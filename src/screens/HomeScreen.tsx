import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, FlatList} from 'react-native';
import Header from '../components/homescreen/Header';
import PromoCard from '../components/homescreen/PromoCard';
import CategoryContainer from '../components/homescreen/CategoryContainer';
import CoffeeCard from '../components/homescreen/CoffeeCard';

const coffeeData = [
  {
    id: '1',
    image: require('../assets/images/americano.jpg'),
    title: 'Hot Americano',
    description: 'Lorem, ipsum.',
    price: 'Rp.18.000',
    category: 'Americano',
  },
  {
    id: '2',
    image: require('../assets/images/americano.jpg'),
    title: 'Iced Americano',
    description: 'Lorem, ipsum.',
    price: 'Rp.22.000',
    category: 'Americano',
  },
  {
    id: '3',
    image: require('../assets/images/americano.jpg'),
    title: 'Hot Latte',
    description: 'Lorem, ipsum.',
    price: 'Rp.20.000',
    category: 'Latte',
  },
  {
    id: '4',
    image: require('../assets/images/americano.jpg'),
    title: 'Iced Latte',
    description: 'Lorem, ipsum.',
    price: 'Rp.24.000',
    category: 'Latte',
  },
];

const categories = [
  {title: 'All Coffee', backgroundColor: '#DE8F5F', color: 'white'},
  {title: 'Machiato', backgroundColor: '#FFF', color: '#000'},
  {title: 'Latte', backgroundColor: '#FFF', color: '#000'},
  {title: 'Americano', backgroundColor: '#FFF', color: '#000'},
  {title: 'Espresso', backgroundColor: '#FFF', color: '#000'},
];

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All Coffee');

  const filteredCoffeeData =
    selectedCategory === 'All Coffee'
      ? coffeeData
      : coffeeData.filter(item => item.category === selectedCategory);

  return (
    <>
      <SafeAreaView style={styles.safeAre}>
        <ScrollView style={styles.scrollView}>
          {/* Header */}
          <Header />
          {/* Promo Card */}
          <PromoCard />
          {/* Category */}
          <CategoryContainer
            categories={categories}
            onSelectCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          {/* Coffee List */}
          <FlatList
            data={filteredCoffeeData}
            renderItem={({item}) => (
              <CoffeeCard
                image={item.image}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.coffeeList}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  coffeeList: {
    paddingHorizontal: 10,
  },
  safeAre: {
    backgroundColor: '#DE8F5F',
  },
});
