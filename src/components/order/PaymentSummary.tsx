import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function PaymentSummary() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.headerText}>Payment Summary</Text>
        <View style={styles.summaryContainer}>
          <View>
            <Text style={styles.labelText}>Price</Text>
            <Text style={styles.labelText}>Delivery Fee</Text>
          </View>
          <View>
            <Text style={styles.valueText}>$ 20</Text>
            <Text style={styles.valueText}>$ 5</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
  summaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    marginBottom: 10,
  },
  valueText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 18,
    marginBottom: 10,
  },
});
