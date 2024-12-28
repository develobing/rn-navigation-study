import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation';

function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [name, setName] = useState('');
  const [age, setAge] = useState(20);

  return (
    <>
      <View style={styles.home}>
        <Text>Home Screen</Text>

        <View style={styles.inputContainer}>
          <Text>Name</Text>
          <TextInput
            value={name}
            placeholder="Enter your name"
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Age</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Enter your age"
            value={age.toString()}
            onChangeText={text => setAge(parseInt(text))}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Text style={styles.navigationsText}>Navigations</Text>

          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login', {name, age})}
          />
          <Button
            title="Go to Top Tab"
            onPress={() => navigation.navigate('TopTab')}
          />
          <Button
            title="Go to Bottom Tab"
            onPress={() => navigation.navigate('BottomTab')}
          />
          <Button
            title="Go to Drawer"
            onPress={() => navigation.navigate('Drawer')}
          />
        </View>
      </View>
    </>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    gap: 10,
  },
  navigationsText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
});
