import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import About from './components/About'
import About from './components/Search'

export default function App() {
  return (
    <View style={{marginVertical:20}}>
    <Search/>
    <View/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
