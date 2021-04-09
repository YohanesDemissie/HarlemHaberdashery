import React from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { navigationRef } from '../navigation/navigationService.js';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import Menu from '../components/Menu';

import {HomeButtonNavigation, StoryButtonNavigation, ShopButtonNavigation} from '../navigation/rootNavigation'
import { createDrawerNavigator } from '@react-navigation/drawer';
import NavigationService from '../navigation/navigationService'
import Home from './Home'

import { createStackNavigator } from '@react-navigation/stack';

import {ROUTES} from '../config/constants';



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
let page;
function handleClick(page) {
     if(seconds <= 5){
       console.log(seconds, 'BELOW 5');
      page = ROUTES.HOME
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
      page = ROUTES.SHOP
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
    page = ROUTES.STORY
  }
  return page;
}

const VideoPage = ({navigation}) => {
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column', marginTop: 100}}>
      <Menu navigation={navigation} />
      <Video source={{uri: 'https://www.w3schools.com/html/mov_bbb.mp4'}} style={{position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,}} />
    <Button title="Test" onPress={() => {
      if(seconds <= 5){
        console.log(seconds, 'BELOW 5');
        navigation.navigate(ROUTES.HOME)
      }
      if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
        navigation.navigate(ROUTES.SHOP)
      }
      if(seconds > 10 && seconds < 15){
        console.log(seconds, '10 - 15')
        navigation.navigate(ROUTES.STORY)}
      }}
    />
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