import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Promo from '../../assets/images/promo.svg';

export default function PromoCard() {
  return (
    <>
      <View style={styles.promoContainer}>
        <View style={styles.promoCard}>
          <View style={styles.promoTextContainer}>
            <View style={styles.promoBadge}>
              <Text style={styles.promoBadgeText}>Promo</Text>
            </View>
            <Text style={styles.promoTitle}>Buy one get one FREE</Text>
            <Pressable style={styles.learnMoreButton}>
              <Text style={styles.learnMoreText}>Learn more</Text>
            </Pressable>
          </View>
          <View style={styles.promoImageContainer}>
            <Promo width={'100%'} height={'100%'} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  promoContainer: {
    paddingHorizontal: 20,
    marginTop: -100,
  },
  promoCard: {
    backgroundColor: '#FFCF9D',
    width: '100%',
    height: 200,
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  promoTextContainer: {
    width: '50%',
  },
  promoBadge: {
    backgroundColor: '#F95454',
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  promoBadgeText: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 16,
  },
  promoTitle: {
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    marginTop: 10,
    color: 'white',
  },
  learnMoreButton: {
    backgroundColor: 'white',
    padding: 6,
    marginTop: 10,
    borderRadius: 10,
  },
  learnMoreText: {
    color: '#FFCF9D',
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: 16,
  },
  promoImageContainer: {
    width: '50%',
    alignItems: 'center',
  },
});
