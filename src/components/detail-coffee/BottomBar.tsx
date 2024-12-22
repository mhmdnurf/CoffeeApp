// BottomBar.tsx
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

interface BottomBarProps {
  price: string;
  onPressBuyNow: () => void;
}

export default function BottomBar({price, onPressBuyNow}: BottomBarProps) {
  return (
    <View style={styles.bottomSheet}>
      <View style={styles.bottomSheetContent}>
        <View>
          <Text style={styles.priceLabel}>Price</Text>
          <Text style={styles.priceValue}>{price}</Text>
        </View>
        <Pressable style={styles.buyNowButton} onPress={onPressBuyNow}>
          <Text style={styles.buyNowText}>Buy Now</Text>
        </Pressable>
      </View>
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
  priceLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#686D76',
  },
  priceValue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 22,
    color: '#DE8F5F',
  },
  buyNowButton: {
    width: '60%',
    backgroundColor: '#DE8F5F',
    padding: 15,
    borderRadius: 20,
  },
  buyNowText: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
  },
});
