import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTabScreen from '../components/stack/BottomTabScreen';
import DrawerScreen from '../components/stack/DrawerScreen';
import HomeScreen from '../components/stack/HomeScreen';
import LoginScreen from '../components/stack/LoginScreen';
import TopTabScreen from '../components/stack/TopTabScreen';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home Stack'}}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TopTab" component={TopTabScreen} />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
