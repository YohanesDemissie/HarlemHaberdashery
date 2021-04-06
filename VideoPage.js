import React from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

import {ROUTES} from './app/config/constants';
import * as RootNavigation from './app/navigation/rootNavigation.js';
import { navigationRef, navigate, NavigationService } from './app/navigation/navigationService.js';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
// import DrawerMenu from './app/navigation/DrawerMenu'
import {HomeButtonNavigation, StoryButtonNavigation, ShopButtonNavigation} from './app/navigation/rootNavigation'

// import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

// import {ROUTES} from '../config/constants';
// import DrawerMenu, {HomeButton} from './app/navigation/DrawerMenu';
// import Home from './app/pages/Home';
import Story from './app/pages/Story';
// import  HomeButtonApp  from './App';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const HomeButtonApp = () => {
  return(
    <NavigationContainer ref={navigationRef}>
      <HomeButtonNavigation  />
     </NavigationContainer>
  )
}

export const StoryButtonApp = () => {
  return(
    <NavigationContainer ref={navigationRef}>
      <StoryButtonNavigation  />
     </NavigationContainer>
  )
}

export const ShopButtonApp = ({ navigation}) => {
  return (
    <NavigationContainer ref={navigationRef}>
      <ShopButtonNavigation  />
     </NavigationContainer>
  )
}

let seconds = 0;
//ADD CONSOLE.LOG('ADDING BY 1') TO END OF 'SECONDS += 1' TO READ ACCUMILATING DATA IN CONSOLE
let timer = setInterval(() => {
  let target;
  seconds += 1;
  if(seconds <= 5){
    console.log(seconds, '0 - 5');
    // return ( <Home /> )
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
      // return (<Story />)
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
    // return (<Shop /> )
  }
  if(seconds >= 15){
    seconds = 0;
    seconds += 1;
  }
},
  1000
);

// BELOW THE SECONDS VARIABLE HOLDS THE VALUE OF TIME!!!!!!!!!!!!!!!!!!!!!!!
function handleClick() {
  let conditionalComponent;
     if(seconds <= 5){
       console.log(seconds, 'BELOW 5');
      conditionalComponent = <HomeButtonApp />
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
      conditionalComponent = <StoryButtonApp />
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
    conditionalComponent = <ShopButtonApp />
  }
  return conditionalComponent;
}

const VideoPage = () => {
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: 100}}>
      <Button title="Test" onPress={() =>  <HomeButtonApp/>} />
    </View>
  )
}

// Later on in your styles..
const styles = StyleSheet.create({
  backgroundVideo: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default VideoPage