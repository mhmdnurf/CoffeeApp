import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function VoucherClaim() {
  return (
    <>
      <View style={styles.voucherContainer}>
        <View style={styles.voucherContent}>
          <View style={styles.voucherDetails}>
            <Icon name="tags" size={20} color={'#FFCF9D'} />
            <Text style={styles.voucherText}>1 Discount is Applies</Text>
          </View>
          <Icon name="chevron-right" size={20} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  voucherContainer: {
    padding: 20,
  },
  voucherContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#EEEEEE',
  },
  voucherDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  voucherText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginLeft: 15,
  },
});
