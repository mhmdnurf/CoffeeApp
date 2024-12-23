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
          backgroundColor={
            item.title === selectedCategory ? '#DE8F5F' : '#F5F7F8'
          }
          color={item.title === selectedCategory ? 'white' : '#10375C'}
          onPress={() => onSelectCategory(item.title)}
        />
      )}
      keyExtractor={item => item.title}
      horizontal
      contentContainerStyle={styles.categoryList}
      showsHorizontalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  categoryList: {
    padding: 20,
  },
});
