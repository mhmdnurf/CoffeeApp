import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

export default function Banner({source}: {source: ImageSourcePropType}) {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 250,
    paddingHorizontal: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
