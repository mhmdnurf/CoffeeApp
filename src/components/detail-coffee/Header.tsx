import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Header({onPress}: {onPress: () => void}) {
  return (
    <>
      <View style={styles.headerContainer}>
        <Pressable onPress={onPress}>
          <Icon name="arrow-left" size={30} color="#686D76" />
        </Pressable>
        <Text style={styles.headerText}>Detail</Text>
        <View>
          <Icon name="heart" size={30} color="#686D76" />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#373A40',
  },
});
