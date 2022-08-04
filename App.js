import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Screen/Login';
import  SignUp  from './Screen/SignUp';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Drawer from './navi/Drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spaghetti from './components/Spaghetti';

export default function App()   {
const Stack = createNativeStackNavigator();
  return(
    <SafeAreaProvider>
<Drawer/>

{/*   
<NavigationContainer>
      <Stack.Navigator initialRouteName="Drawer"
      screenOptions={
        {
          headerShown: false,
      }}>
        <Stack.Screen name="Drawer" component={Drawer} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer> */}
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
