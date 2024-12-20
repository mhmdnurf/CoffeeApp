import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from './SearchBar';

export default function Header() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.locationText}>Location</Text>
        <Text style={styles.locationName}>Tanjungpinang, Kepulauan Riau</Text>
        <SearchBar />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 300,
    backgroundColor: '#DE8F5F',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  locationText: {
    fontFamily: 'Nunito-Light',
    color: 'white',
  },
  locationName: {
    fontSize: 18,
    fontFamily: 'Nunito-Bold',
    color: 'white',
  },
});
