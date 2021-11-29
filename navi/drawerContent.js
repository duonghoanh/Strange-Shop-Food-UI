import * as React from 'react';
import { Button, View,StyleSheet,Text,Image, ScrollView} from 'react-native';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem, } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { Icon } from 'react-native-elements/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import Index from '../Screen/Index';

export default function drawerContent(props){
  return(
    <DrawerContentScrollView >
<View style={styles.imgContainer}>
<Text style={styles.textImageAccount}>Str</Text>
    <Image source={require('../assets/strangeLogoMini.png')}
      style={styles.imgAvatar}
    />
    <Text style={styles.textImageAccount}>nge</Text>
</View>
<View style={styles.viewListItem}>
<DrawerItem
        icon={()=><Icon name="home" size={30} color="red" style={styles.iconItem}  />}
        style={styles.DrawerItemList}
        label="HOME"
        onPress={() => props.navigation.navigate('Home')}
      />
  <DrawerItem
        icon={()=><Icon name="user" size={30} color="red" style={styles.iconItem}  />}
        style={styles.DrawerItemList}
        label="  PROFILE"
        onPress={() => props.navigation.navigate('Profile')}
      />
  <DrawerItem
        icon={()=><Icon name="edit" size={30} color="red" style={styles.iconItem}  />}
        style={styles.DrawerItemList}
        label="FEEDBACK"
        onPress={() => props.navigation.navigate('Feedback')}
      />

      <DrawerItem
        icon={()=><Icon name="shopping-cart" size={30} color="red" style={styles.iconItem}  />}
        style={styles.DrawerItemList}
        label="  Cart"
        onPress={() => props.navigation.navigate('Cart')}
      />
        <DrawerItem
        icon={()=><Icon name="close" size={30} color="red" style={styles.iconItem}  />}
        style={styles.DrawerItemList}
        label="  Close"
        onPress={() => props.navigation.closeDrawer()}
      />
</View> 
</DrawerContentScrollView>
  );

}


const styles = StyleSheet.create({
container:{

},
imgAvatar:{
  borderRadius:50,
  height:50,
  width:50,
  
},
imgContainer:{
  padding: 16,
  
  borderRadius: 10,
  shadowColor: 'blue',
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 0 },
  shadowOpacity: 0.5,
  marginTop: 10,
  // flex: 1,
  display:'flex',
  justifyContent: 'center',
  backgroundColor: '#fffc59',
  alignItems: 'center',
  marginLeft: 5,
  marginRight: 5,
  marginTop:40,
  flexWrap: 'wrap',
  flexDirection: 'row',
},
textImageAccount:{
  fontSize:50,
  fontWeight:'normal',
 
},
DrawerItemList:{
 
  backgroundColor:'#a4d7f5',
  shadowColor: 'yellow',
  shadowRadius: 10,
  shadowOffset: { width: 4, height:10},
  shadowOpacity: 0.6,
  marginTop:20,
},
iconItem:{
  position:'relative',
 
},
viewListItem:{
marginTop:50,
left:1,
}
});
