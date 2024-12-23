import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface HeaderProps {
  onPress: () => void;
}

export default function Header({onPress}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable onPress={onPress}>
        <Icon name="arrow-left" size={30} />
      </Pressable>
      <Text style={styles.headerTitle}>Order</Text>
      <Icon name="arrow-left" size={30} color={'white'} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Nunito-Bold',
    marginLeft: 10,
  },
});
