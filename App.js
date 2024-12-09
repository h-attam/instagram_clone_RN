import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './src/Screen';
import {SafeAreaView} from 'react-native-safe-area-context';

console.error = () => {}; //  error message close

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Screen />
      </NavigationContainer>
    </SafeAreaView>
  );
}
