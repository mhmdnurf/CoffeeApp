import React from 'react';
import {View, StyleSheet} from 'react-native';
import DetailDescription from './DetailDescription';
import InfoContainer from './InfoContainer';
import IconContainer from './IconContainer';
import Size from './Size';

interface ContentProps {
  coffeeName: string;
}

export default function Content({coffeeName}: ContentProps) {
  return (
    <>
      <View style={styles.container}>
        <InfoContainer coffeeName={coffeeName} />
        <IconContainer />
      </View>
      <DetailDescription />
      <Size />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#A6AEBF',
    marginHorizontal: 20,
  },
  selectedSizeText: {
    fontSize: 16,
    color: '#41444B',
    marginTop: 10,
    fontFamily: 'Poppins-SemiBold',
  },
});
