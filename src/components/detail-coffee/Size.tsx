import React, {useState} from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

interface SizeProps {
  onSizeSelect?: (size: string) => void;
}

export default function Size({onSizeSelect}: SizeProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const handlePress = (size: string) => {
    setSelectedSize(size);
    if (onSizeSelect) {
      onSizeSelect(size);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Size</Text>
        <View style={styles.sizeContainer}>
          {['S', 'M', 'L'].map(size => (
            <Pressable
              key={size}
              onPress={() => handlePress(size)}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.selectedSizeBox,
              ]}>
              <Text
                style={[
                  styles.sizeText,
                  selectedSize === size && styles.selectedSizeText,
                ]}>
                {size}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
    color: '#41444B',
    marginBottom: 10,
  },
  sizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sizeBox: {
    padding: 5,
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EEEEEE',
  },
  selectedSizeBox: {
    backgroundColor: 'rgba(255, 207, 157, 0.4)',
    borderColor: '#DE8F5F',
  },
  sizeText: {
    fontSize: 16,
    color: '#41444B',
    fontFamily: 'Poppins-Medium',
  },
  selectedSizeText: {
    color: '#DE8F5F',
  },
});
