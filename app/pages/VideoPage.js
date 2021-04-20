import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Menu from '../components/Menu';
import HHJacketPt1 from '../../assets/videos/HHJacketPt1.mp4';
import HHWaterPt2 from '../../assets/videos/HHWaterPt2.mp4';
import HHSpiritsPt3 from '../../assets/videos/HHSpiritsPt3.mp4';

import { createStackNavigator } from '@react-navigation/stack';

import {ROUTES} from '../config/constants';
//create array of videos
const videoData = [
  HHJacketPt1,
  HHWaterPt2,
  HHSpiritsPt3,
];

let seconds = 0;
let index = 0;
const VideoPage = ({navigation}) => {
let timer = setInterval(() => {
  seconds += 1;
  if(index >= 3){
    index = 0;
  }
  if(seconds >= 10){
    seconds = 0;
    index += 1;
  }
  console.log(seconds, index);
  return {seconds, index}
},
  1000
);

// let videoTimer = setInterval(() => {
//   index += 1;
//   if(index >= 3){
//     index = 0;
//   }
//   return () => index;
// }, 10000);
console.log(index, 'INDEXXX')
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      {/* <Menu navigation={navigation} /> */}
      <TouchableOpacity style={{display: 'flex', flex: 1}} onPress={() => {
        if(seconds < 10){
          console.log(seconds, 'BELOW 10');
          Linking.openURL('https://www.harlemhaberdashery.com/')
        } else
        if(seconds >= 10 && seconds < 20){
          console.log(seconds, '10 - 20')
          Linking.openURL('https://www.marvelouswaters.com/buy')
        } else
        if(seconds >= 20 && seconds < 30){
          console.log(seconds, '20 - 30')
          Linking.openURL('https://hhbespokespirits.com/buy-now')
        }
      }}>

      <Video
        // fullscreen={true}
        // resizeMode="cover"
        currentTime={seconds}
        muted={true}
        source={videoData[index]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}/>

      </TouchableOpacity>
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