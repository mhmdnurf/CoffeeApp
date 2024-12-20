import React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar() {
  return (
    <>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name="search" color="#A6AEBF" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for coffee"
            placeholderTextColor="#A6AEBF"
            style={styles.searchInput}
          />
        </View>
        <Pressable style={styles.filterButton}>
          <Icon name="list" color="white" style={styles.filterIcon} />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
    height: 60,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
    padding: 20,
  },
  searchIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  filterButton: {
    backgroundColor: '#FFB38E',
    borderRadius: 10,
    width: 60,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    fontSize: 30,
  },
});
