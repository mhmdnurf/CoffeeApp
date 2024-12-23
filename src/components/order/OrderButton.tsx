import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface OrderButton {
  balance: string;
  onPressOrder: () => void;
}

export default function OrderButton({balance, onPressOrder}: OrderButton) {
  return (
    <View style={styles.bottomSheet}>
      <View style={styles.bottomSheetContent}>
        <View style={styles.rowSpaceBetween}>
          <View style={styles.rowAlignCenter}>
            <Icon name="wallet-outline" size={30} color="#DE8F5F" />
            <View style={styles.walletInfo}>
              <Text style={styles.walletText}>Cash/Wallet</Text>
              <Text>{balance}</Text>
            </View>
          </View>
          <Icon name="chevron-down" size={30} color="#000" />
        </View>
      </View>
      <Pressable style={styles.orderNowButton} onPress={onPressOrder}>
        <Text style={styles.orderNowText}>Order</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheet: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
    borderTopWidth: 2,
    borderTopColor: '#F4F6FF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.025,
    width: '100%',
    minHeight: 200,
  },
  bottomSheetContent: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  rowAlignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletInfo: {
    marginLeft: 10,
  },
  walletText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 5,
  },
  orderNowButton: {
    backgroundColor: '#DE8F5F',
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 15,
  },
  orderNowText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
