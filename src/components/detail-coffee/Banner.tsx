import React, {useState} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Modal,
  View,
} from 'react-native';

export default function Banner({source}: {source: ImageSourcePropType}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleLongPress = () => {
    setIsZoomed(true);
  };

  const handleClose = () => {
    setIsZoomed(false);
  };

  return (
    <>
      <Pressable
        style={styles.imageContainer}
        onLongPress={handleLongPress}
        onPress={handleLongPress}>
        <Image source={source} style={styles.image} />
      </Pressable>
      {isZoomed && (
        <Modal
          transparent={true}
          animationType="fade"
          visible={isZoomed}
          onRequestClose={handleClose}>
          <View style={styles.modalBackground}>
            <Pressable
              style={styles.zoomedImageContainer}
              onPress={handleClose}>
              <Image source={source} style={styles.zoomedImage} />
            </Pressable>
          </View>
        </Modal>
      )}
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
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedImageContainer: {
    width: '95%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomedImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
});
