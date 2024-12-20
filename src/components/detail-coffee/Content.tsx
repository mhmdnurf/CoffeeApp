import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Content {
  coffeeName: string;
}

export default function Content({coffeeName}: Content) {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.coffeeName}>{coffeeName}</Text>
          <Text style={styles.description}>Lorem</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" color={'#F3C623'} size={28} />
            <View style={styles.ratingTextContainer}>
              <Text style={styles.rating}>4.8</Text>
              <Text style={styles.ratingCount}>(230)</Text>
            </View>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <View style={styles.iconWrapper}>
            <Icon name="truck" color={'#DE8F5F'} size={24} />
          </View>
          <View style={styles.iconWrapper}>
            <Icon name="coffee" color={'#DE8F5F'} size={24} />
          </View>
          <View style={styles.iconWrapper}>
            <Icon name="shopping-bag" color={'#DE8F5F'} size={24} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#EEEEEE',
  },
  coffeeName: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    marginBottom: 5,
    color: '#41444B',
  },
  description: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#41444B',
    marginHorizontal: 5,
  },
  ratingCount: {
    fontSize: 12,
    fontFamily: 'Poppins-Regular',
    color: '#7C7C7C',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    padding: 5,
    width: 50,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F6FF',
    marginRight: 10,
  },
});
