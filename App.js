import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import Home from './Components/home/Home';
import Nftpage from './Components/nftpage/Nftpage';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useState, useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NftCollection from './Components/nftCollection/NftCollection';
import BuyNftCollection from './Components/buyNftCollection/BuyNftCollection';
import MapInterface from './Components/mapInterface/MapInterface';
const SIZE = 100.0;
const CIRCLE_RADUSE= SIZE * 2;
const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function  App (){
  
    const [isLoaded] = useFonts({
      "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
      "mrt-ita": require("./assets/fonts/Montserrat-Italic.ttf"),
      "mrt-mid": require("./assets/fonts/Montserrat-Medium.ttf"),
      "mrt-reg": require("./assets/fonts/Montserrat-Regular.ttf"),
    });

    const handleOnLayout = useCallback(async () => {
      if (isLoaded) {
        await SplashScreen.hideAsync(); //hide the splashscreen
      }
    }, [isLoaded]);

    if (!isLoaded) {
      return null;
    }

    return (
    <View style={styles.container} onLayout={handleOnLayout}>
      <Home/>
      {/*<Nftpage/>*/}
      {/*<NftCollection/>*/}
    {/*<BuyNftCollection/>*/}
      {/*<MapInterface/>*/}
      <StatusBar style="auto" />
    </View>  
  );
  }




const styles = StyleSheet.create({
  container: {
      flex: 1,
      
    
  },
  circle:{
    width:CIRCLE_RADUSE * 2 ,
        height:CIRCLE_RADUSE * 2,
        alignContent:'center',
        justifyContent:'center',
        borderRadius:CIRCLE_RADUSE,
        borderWidth:1,
        borderColor:'#03DA99',
        top:-180

},
});

