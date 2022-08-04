import * as React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Index from '../Screen/Index';
import Profile from '../Screen/Profile';
import DrawerContent from '../navi/drawerContent';
import Feedback from '../Screen/Feedback';
import Icon from 'react-native-vector-icons/Ionicons';
import Cart from '../Screen/Cart';
import sign from '../Screen/SignUp';
const Drawer = createDrawerNavigator();
export default function Drawern() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home"
          component={Index}  
          // icon={()=><Icon name="home" size={30} color="red" style={styles.iconItem}  />}
          options={{
            headerTitleAlign: 'center',
            title: 'Home',
            drawerIcon: () => (
              <Icon
                 name="md-home"
                 size={30}
                 color={'#000000'}
              />
           ),
          }} />
        <Drawer.Screen name="Profile" component={Profile} options={{
          headerTitleAlign: 'center',
          title: 'Profile'
        }} />
        <Drawer.Screen name="Feedback" component={Feedback} options={{
          headerTitleAlign: 'center',
          title: 'Feedback'
        }} />
           <Drawer.Screen name="Cart" component={Cart} options={{
          headerTitleAlign: 'center',
          title: 'Cart'
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}







const styles = StyleSheet.create({

});