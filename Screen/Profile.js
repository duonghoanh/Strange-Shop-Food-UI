import { StatusBar } from 'expo-status-bar';
import  React,{useState} from 'react';
import { Image, ScrollView, StyleSheet,
   Text, View, TextInput, 
   SafeAreaView, Button,
  Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Profile() {
const [name, setName] = useState('');
const [face, setFace] = useState('facebook.com/');
const [number, setNumber] = useState(0);
const [andress, setAndress] = useState('')

const twoOptionAlert=()=>{
Alert.alert(
  // title
  'Do you want save',
  //body
'Choose Yes or No ',
[
  {
    text: 'Yes', onPress: () =>{
      console.log('Saved');
    }
    },
     {
        text: 'No', onPress: () =>{
        console.log('No saved');
      }
    },
 
]
)
}

  return (
    <SafeAreaView>
    <View >
      {/* <View >
        <Image source={require('../assets/img-me.png')} />
      </View> */}
      <View style={{alignItems: 'center'}}>
      <Image source={require('../assets/lock.png')} 
        style={styles.imgAvatar}
      />
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={{alignItems:'center',padding:10, backgroundColor:'#0066ff', width:'50%', height:40, justifyContent:'center', borderRadius:20}}>
          <Text >Change Photo</Text>
</TouchableOpacity>
      </View>
      {/* <Text>{name}</Text>
      <Text>{face}</Text>
      <Text>{number}</Text>
      <Text>{andress}</Text> */}
      <View >
        <Text style={{ color: 'red',marginLeft:10 }}>Họ và Tên: </Text>
        <TextInput
          placeholder='Hello, please write from me!!'
          onChangeText={(name)=>setName(name)}
          style={styles.input}
           />
      </View>
      <View >
        <Text style={{ color: 'red',marginLeft:10 }}>Facebook: </Text>
        <TextInput
          placeholder='Hello, please write from me!!' 
          onChangeText={(face)=>setFace(face)}
            style={styles.input}
          />
      </View>
      <View >
        <Text style={{ color: 'red',marginLeft:10 }}>Số Điện Thoại: </Text>
        <TextInput
          placeholder='Hello, please write from me!!'
          onChangeText={(number)=>setNumber(number)}
          style={styles.input}
           />
      </View>
      <View >
        <Text style={{ color: 'red',marginLeft:10 }}>Địa chỉ: </Text>
        <TextInput
          placeholder='Hello, please write from me!!' 
        onChangeText={(dress)=>setAndress(dress)}
          style={styles.input}
          />
      </View>
      <View >
        <Button
          // onPress={this.buttonClickListener}
          title="save"
          color="#0066ff"
          onPress={twoOptionAlert}
  
        />

      </View>

    </View>
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
  

    // flexDirection: 'row',
    margin: 10,
  },
imgAvatar:{
  borderRadius:50,
  height:100,
  width:100,
  justifyContent:'center',
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
  input: {
    marginVertical:10,
    paddingHorizontal:10,
  }

});