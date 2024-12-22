import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function IconContainer() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
