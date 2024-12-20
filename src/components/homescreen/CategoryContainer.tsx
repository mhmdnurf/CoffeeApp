// CategoryContainer.tsx
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import CategoryCard from './CategoryCard';

interface CategoryContainer {
  categories: Array<{title: string; backgroundColor: string; color: string}>;
  onSelectCategory: (category: string) => void;
  selectedCategory: string;
}

export default function CategoryContainer({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryContainer) {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <CategoryCard
          title={item.title}
          backgroundColor={item.title === selectedCategory ? '#DE8F5F' : '#FFF'}
          color={item.title === selectedCategory ? 'white' : '#000'}
          onPress={() => onSelectCategory(item.title)}
        />
      )}
      keyExtractor={item => item.title}
      horizontal
      contentContainerStyle={styles.categoryList}
    />
  );
}

const styles = StyleSheet.create({
  categoryList: {
    padding: 20,
  },
});
