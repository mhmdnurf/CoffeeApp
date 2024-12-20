// CategoryCard.tsx
import React from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

interface CategoryCard {
  title: string;
  backgroundColor: string;
  color: string;
  onPress: () => void;
}

export default function CategoryCard({
  title,
  backgroundColor,
  color,
  onPress,
}: CategoryCard) {
  return (
    <Pressable onPress={onPress} style={[styles.card, {backgroundColor}]}>
      <Text style={[styles.text, {color}]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 10,
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Poppins-SemiBold',
  },
});
