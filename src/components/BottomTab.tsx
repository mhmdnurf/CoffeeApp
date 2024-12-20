import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import Icon from 'react-native-vector-icons/FontAwesome6';
import ProfileScreen from '../screens/ProfileScreen';

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#DE8F5F',
          tabBarInactiveTintColor: '#EEEEEE',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="house" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
            title: 'Profile',
          }}
        />
      </Tab.Navigator>
    </>
  );
}
