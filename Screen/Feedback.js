import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TextInput, SafeAreaView,Button} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Header } from 'react-native-elements';
import ImgX from '../assets/img4k.png';


import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';

export default function Feedback(navigation) {
  const [text, onChangeText] = React.useState("");

  return (

    <View>
      {/* <Image source={require('../assets/img-me.png')}  /> */}
      <View style={styles.viewText}>
      
     
            {/* <Image  source={require('../assets/strangeLogo.png')}
         />
       */}
      </View>
      <View style={styles.viewText}>
        <Text style={{ color: 'red' }}>Email: </Text>
        <Text>hoanhduong2201@gmail.com</Text>


      </View>
      <ScrollView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder='Hello, please write from me!!' />
      </ScrollView>
      <View       >
          <Button
            // onPress={this.buttonClickListener}
            title="Gửi"
            color="#0066ff"
          
          />
        </View> 
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    display: 'flex',
  },
  viewText:{
    flexDirection:'row',
  
    shadowColor:'blue',
    fontSize:15,
    flexWrap: 'wrap',
  },

});