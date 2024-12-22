import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface InfoContainer {
  coffeeName: string;
}

export default function InfoContainer({coffeeName}: InfoContainer) {
  return (
    <View style={styles.infoContainer}>
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
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    marginBottom: 20,
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
});
