import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ArticleScreen from '../components/drawer/ArticleScreen';
import FeedScreen from '../components/drawer/FeedScreen';
import HomeScreen from '../components/stack/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Article" component={ArticleScreen} />
      <Drawer.Screen name="Feed" component={FeedScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
