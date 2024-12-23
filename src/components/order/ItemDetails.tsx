import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function ItemDetails({
  item,
}: {
  item: {
    image: ImageSourcePropType;
    title: string;
    description: string;
  };
}) {
  return (
    <>
      <View style={styles.itemContainer}>
        <View style={styles.itemDetails}>
          <Image
            source={item.image}
            style={styles.itemImage}
            resizeMode="cover"
          />
          <View>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
          </View>
        </View>
        <View style={styles.quantityContainer}>
          <Pressable style={styles.quantityButton}>
            <Text>+</Text>
          </Pressable>
          <View style={styles.quantityTextContainer}>
            <Text style={styles.quantityText}>1</Text>
          </View>
          <Pressable style={styles.quantityButton}>
            <Text>-</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemTitle: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    marginBottom: 5,
    color: '#758694',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
    borderRadius: 100,
    marginRight: 10,
  },
  quantityTextContainer: {
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  quantityText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
});
