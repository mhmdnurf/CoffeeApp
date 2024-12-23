import React from 'react';
import {
  Alert,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import Header from '../components/order/Header';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types/types';
import AddressSection from '../components/order/AddressSection';
import ItemDetails from '../components/order/ItemDetails';
import VoucherClaim from '../components/order/VoucherClaim';
import PaymentSummary from '../components/order/PaymentSummary';
import OrderButton from '../components/order/OrderButton';

type OrderScreenNavigation = StackNavigationProp<
  RootStackParamList,
  'OrderScreen'
>;

interface OrderScreenProps {
  navigation: OrderScreenNavigation;
  route: {
    params: {
      item: {
        id: string;
        image: ImageSourcePropType;
        title: string;
        description: string;
        price: string;
        category: string;
      };
    };
  };
}

export default function OrderScreen({navigation, route}: OrderScreenProps) {
  const {item} = route.params;
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header onPress={() => navigation.goBack()} />
      <AddressSection
        addressLine1="Jl. Rajawali"
        addressLine2="Kampung Air Raja KM.14, Tanjungpinang"
      />
      <ItemDetails item={item} />
      <View style={styles.divider} />
      {/* VoucherClaim */}
      <VoucherClaim />
      {/* PaymentSummary */}
      <PaymentSummary />
      {/* OrderButton */}
      <OrderButton
        balance="Rp 25.000"
        onPressOrder={() => Alert.alert('Ordered Succesfully')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    minHeight: '100%',
  },
  divider: {
    borderWidth: 2,
    borderColor: '#FFCF9D',
  },
});
