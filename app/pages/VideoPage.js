import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import Menu from '../components/Menu';
import HHJacketPt1 from '../../assets/videos/HHJacketPt1.mp4';
import HHWaterPt2 from '../../assets/videos/HHWaterPt2.mp4';
import HHSpiritsPt3 from '../../assets/videos/HHSpiritsPt3.mp4';

import { createStackNavigator } from '@react-navigation/stack';

import {ROUTES} from '../config/constants';

let seconds = 0;
//ADD CONSOLE.LOG('ADDING BY 1') TO END OF 'SECONDS += 1' TO READ ACCUMILATING DATA IN CONSOLE
let timer = setInterval(() => {
  seconds += 1;
  if(seconds <= 5){
    console.log(seconds, '0 - 5');
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
  }
  if(seconds >= 15){
    seconds = 0;
    seconds += 1;
  }
},
  1000
);

//create array of videos
const videoData = [
  HHJacketPt1,
  HHWaterPt2,
  HHSpiritsPt3,
];

// BELOW THE SECONDS VARIABLE HOLDS THE VALUE OF TIME!!!!!!!!!!!!!!!!!!!!!!!
let page;
function handleClick(page) {
     if(seconds <= 5){
      //  console.log(seconds, 'BELOW 5');
      page = ROUTES.HOME
  }
  if(seconds > 5 && seconds <= 10){
        // console.log(seconds, '5 - 10')
      page = ROUTES.SHOP
  }
  if(seconds > 10 && seconds < 15){
    // console.log(seconds, '10 - 15')
    page = ROUTES.STORY
  }
  return page;
}

// const VideoCarousel = () => {
//   const [index, setIndex] = useState(0);

//    useEffect(() => {
//      const toggle = setInterval(() => {
//        setIndex( index + 1)
//      }, 10000);
//      //MAKE VIDEO ARRAY LOOP BACK TO BEGINNING
//      if(index > 2){
//        setIndex(0)
//      }
//      return () => clearInterval(toggle);
//   })

//   return <Video source={videoData[index]}  style={{
//         position: 'absolute',
//         top: 150,
//         left: 0,
//         bottom: 0,
//         right: 0,}}/>;
// }

const VideoPage = ({navigation}) => {
  const [index, setIndex] = useState(0);

   useEffect(() => {
     const toggle = setInterval(() => {
       setIndex( index + 1)
     }, 10000);
     //MAKE VIDEO ARRAY LOOP BACK TO BEGINNING
     if(index > 2){
       setIndex(0)
     }
     return () => clearInterval(toggle);
  })
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      <Menu navigation={navigation} />
      <TouchableOpacity style={{display: 'flex', flex: 1}} onPress={() => {
        if(seconds <= 5){
          // console.log(seconds, 'BELOW 5');
          navigation.navigate(ROUTES.HOME)
        }
        if(seconds > 5 && seconds <= 10){
          // console.log(seconds, '5 - 10')
          navigation.navigate(ROUTES.SHOP)
        }
        if(seconds > 10 && seconds < 15){
          // console.log(seconds, '10 - 15')
          navigation.navigate(ROUTES.STORY)}
      }}>

      <Video 
        fullscreen={true}
        resizeMode="cover"
        key={index}
        source={videoData[index]}
        style={{
          position: 'absolute',
          viewHeight: '400%',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}/>

      </TouchableOpacity>
      {/* <Button title="Test" onPress={() => {
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
      /> */}
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