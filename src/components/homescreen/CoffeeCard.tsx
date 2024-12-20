import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

interface CoffeeCard {
  image: ImageSourcePropType;
  title: string;
  description: string;
  price: string;
  onPress: () => void;
}

export default function CoffeeCard({
  image,
  title,
  description,
  price,
  onPress,
}: CoffeeCard) {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
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
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
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
