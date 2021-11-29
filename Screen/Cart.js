import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Image, ScrollView, 
  StyleSheet, Text, View, 
  TextInput, SafeAreaView,
   Button,Alert, } from 'react-native';


export default function Cart() {
const [Item, setItem] = useState(0)

const  buyItem = ()=>{
  Alert.alert(
  //title 
  'Are you sure you want to buy? ',
  'Choose yes if you want to buy',
[
  {
    text:'Yes',onPress:()=>{
        console.log('bought')
    }
  },
  {
    text:'No',onPress:()=>{
        console.log('bought')
    }
  }
])
} 

  return (
<SafeAreaView>
    <View >
      {/* <View >
        <Image source={require('../assets/img-me.png')} />
      </View> */}
      <Image source={require('../assets/pizza.png')} 
                style={{width:80, height:80}} />
                <Text>
                {item}
                </Text>
    </View>
<Button 
title='Do you want buy?'
  onClick={buyItem }

  />
</SafeAreaView>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // float:'left',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection: 'row',
  },
  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    display: 'flex',
  },
  viewText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    shadowColor: 'blue',
    fontSize: 15,
    flexWrap: 'wrap',
  },

});