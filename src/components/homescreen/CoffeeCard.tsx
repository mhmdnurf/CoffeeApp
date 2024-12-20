import React from 'react';
import {View, Image, Text, StyleSheet, ImageSourcePropType} from 'react-native';

interface CoffeeCard {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
}

export default function CoffeeCard({
  image,
  title,
  description,
  price,
}: CoffeeCard) {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    padding: 10,
    elevation: 5,
    margin: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F4F6FF',
  },
  imageContainer: {
    width: '100%',
    height: 155,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    color: '#41444B',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    marginTop: 10,
  },
  description: {
    fontSize: 12,
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 20,
    marginTop: 10,
    color: '#41444B',
    fontFamily: 'Poppins-SemiBold',
  },
});
