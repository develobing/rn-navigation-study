import React from 'react';
import {View, Text, Button} from 'react-native';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';

const LoginScreen = ({
  route,
}: {
  route: RouteProp<RootStackParamList, 'Login'>;
}) => {
  const {name, age} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>LoginScreen</Text>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default LoginScreen;
