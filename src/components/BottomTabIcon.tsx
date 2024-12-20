import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function BottomTabIcon() {
  let iconName;

  if (route.name === 'Home') {
    iconName = 'house';
  } else if (route.name === 'ProfileScreen') {
    iconName = 'user';
  }

  return <Icon name={iconName} color={color} size={size} />;
}

// Define the Tab navigator outside of the functional component
