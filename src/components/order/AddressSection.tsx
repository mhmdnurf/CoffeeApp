import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface AddressSectionProps {
  addressLine1: string;
  addressLine2: string;
  onEditPress?: () => void;
  onAddNotePress?: () => void;
}

export default function AddressSection({
  addressLine1,
  addressLine2,
  onEditPress,
  onAddNotePress,
}: AddressSectionProps) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Delivery Address</Text>
        </View>
        <View style={styles.addressContainer}>
          <Text style={styles.addressText}>{addressLine1}</Text>
          <Text style={styles.addressDetailText}>{addressLine2}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.editButton} onPress={onEditPress}>
              <Icon name="edit" size={16} style={styles.editIcon} />
              <Text style={styles.editButtonText}>Edit Address</Text>
            </Pressable>
            <Pressable style={styles.addNoteButton} onPress={onAddNotePress}>
              <Icon name="file-text-o" size={16} style={styles.addNoteIcon} />
              <Text style={styles.addNoteText}>Add Note</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: '#EEEEEE',
  },
  headerContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  headerText: {
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
  },
  addressContainer: {
    marginHorizontal: 20,
  },
  addressText: {
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'Nunito-Bold',
  },
  addressDetailText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: '#758694',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingVertical: 20,
  },
  editButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#758694',
  },
  editIcon: {
    color: 'black',
    marginRight: 5,
  },
  editButtonText: {
    fontFamily: 'Nunito-Regular',
  },
  addNoteButton: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 100,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#758694',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNoteIcon: {
    color: 'black',
    marginRight: 5,
  },
  addNoteText: {
    fontFamily: 'Nunito-Regular',
  },
});
