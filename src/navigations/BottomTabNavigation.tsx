import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ListScreen from '../components/bottom/ListScreen';
import ProfileScreen from '../components/bottom/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="List" component={ListScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
