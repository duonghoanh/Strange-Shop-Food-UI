import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {  ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './Screen/Login';
import  Sign  from './Screen/Sign';
import Drawer from './navi/Drawer';


export default function App()   {

  return(
    <SafeAreaProvider>
      <ThemeProvider>
        <Drawer />
      </ThemeProvider>
</SafeAreaProvider>

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
