import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    Image, ScrollView,
    StyleSheet, Text,
    TouchableOpacity, View,
    SafeAreaView, Dimensions,
    Modal, TextInput,Alert
} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import Spaghetti from '../components/Spaghetti';
import ChickenThighs from '../components/ChickenThighs';
// import ChickenWings from '../components/chickenWings';
import Humburger from '../components/Humburger';
import Cake from '../components/Cake';
import Pizza from '../components/Pizza';
import ChickenWings from '../components/ChickenWings';

const openDrawer = createDrawerNavigator();
const images = [
    'https://cdn.vietnambiz.vn/2020/3/23/food-safety-1584933347508274273527.jpg',
    'https://cdn.vietnambiz.vn/2020/3/23/food-safety-1584933347508274273527.jpg',
    'https://cdn.vietnambiz.vn/2020/3/23/food-safety-1584933347508274273527.jpg',
]
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default function Index() {
    const [imgActive, setimgActive] = useState(0);

    onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setimgActive(slide);
            }
        }
    }
    return (
        <View style={styles.container}>

        {/* //slide */}
        <View style={{flex: 1}}>
        <SafeAreaView >
        
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}>
                    {
                        images.map((e, index) =>
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{ uri: e }}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDod}>
                    {
                        images.map((e, index) =>
                            <Text key={e} style={imgActive == index ? styles.dotActive : styles.dot} >●</Text>
                        )
                    }

                </View>
            </View>
        </SafeAreaView>
        </View>
    {/* //List Item food  */}
            <View style={{flex:3,
            borderRadius:10,
            flexDirection:'row',
            backgroundColor:'red',
            marginTop: 30,
            borderRadius:20,
            backgroundColor:'#e8fcff',
            shadowColor:'#b1eafc',
            shadowOpacity:0.5}}>
         <View style={{flex:1,justifyContent: 'center', backgroundColor:'#fc4444', borderTopLeftRadius:50,borderBottomLeftRadius:50}}  >
<Image source={require('../assets/strangeLogoLeft.png')}
    style={{width:50,
    height:200,
   
    }}

    />
         </View>  
     <View style={{flex:6,
     flexDirection:'column',
     backgroundColor:'#e8fcff',}}>
     <ScrollView >
        <TouchableOpacity >
              <Spaghetti/>
        </TouchableOpacity>
        <TouchableOpacity >
              <Cake/>
        </TouchableOpacity>
        <TouchableOpacity >
              <ChickenThighs/>
        </TouchableOpacity>
        <TouchableOpacity >
              <Humburger/>
        </TouchableOpacity>
        <TouchableOpacity >
              <Pizza/>
        </TouchableOpacity>
        <TouchableOpacity>
            <ChickenWings/>
        </TouchableOpacity>
        </ScrollView>

     </View>

</View>
</View>
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
      
        flexDirection: 'column',
    },
    wrap: {
        width: WIDTH,
        height: HEIGHT * 0.25,
        borderRadius: 10,
        
    },
    wrapDod: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dotActive: {
        margin: 3,
        color: 'white',
    },
    dot: {
        margin: 3,
        color: 'black',
    },
    img: {
        height: 200,
        width: 250,
        borderRadius: 20
    },
    imgView: {
        padding: 16,
        borderRadius: 10,
        shadowColor: '#000',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        marginTop: 10,
        // flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignItems: 'center',
        marginLeft: 5,
        marginRight: 5,
    },
    textItem: {
        marginTop: 10,
        color: '#00056b',
        fontSize: 15,
        fontWeight: 'bold'
    },
    imgItemFoot:{
        width:'100%',
        height:200,
        shadowColor: 'blue',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius:5,
        margin:10, 
    },
    itemFoot:{
        width:'100%',
        height:200,
        shadowColor: 'blue',
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius:5,
        margin:10, 
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
}
}
);
