import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Menu from '../components/Menu';
import HHJacketPt1 from '../../assets/videos/HHJacketPt1.mp4';
import HHWaterPt2 from '../../assets/videos/HHWaterPt2.mp4';
import HHSpiritsPt3 from '../../assets/videos/HHSpiritsPt3.mp4';

import { createStackNavigator } from '@react-navigation/stack';

import {ROUTES} from '../config/constants';

let seconds = 0;
let indexRef = 0;
// Setting value on playback timer for video 
let timer = setInterval(() => {
  // const [timerVideo, setTimerVideo] = useState(0);
    // const [timerVideo, setTimerVideo] = useState(0);
    // const [index, setIndex] = useState(0)
  seconds += 1;
  // setTimerVideo(seconds)
  if(seconds < 10){
    // setTimerVideo(seconds);
    //ADD CONSOLE.LOG('ADDING BY 1') TO END OF 'SECONDS += 1' TO READ ACCUMILATING DATA IN CONSOLE
    console.log(seconds, '0 - 10');
  }
  if(seconds >= 10){
    // setTimerVideo(seconds - 10)
        // indexRef += 1;
        console.log(indexRef, 'INDEX REF + 1')
        console.log(seconds, 'HIT 10 TARGET')
        seconds = 0;
        // setIndex(index + 1)
        // seconds += 1;
  }
  // if(indexRef > 2){
  //   indexRef = 0;
  // }
  // if(index === 3){
  //   setIndex(0)
  // }
  // if(seconds >= 20 && seconds < 30){
  //   // setTimerVideo(seconds - 20)
  //   console.log(seconds, '20 - 30')
  // }
  // if(seconds == 30){
  //   seconds = 0;
  //   seconds += 1;
  //   // setTimerVideo(seconds)
  // }
  return seconds
},
  1000
);

// BELOW THE SECONDS VARIABLE HOLDS THE VALUE OF TIME!!!!!!!!!!!!!!!!!!!!!!!
// let page;
// function handleClick(page) {
//      if(seconds <= 10){
//       //  console.log(seconds, 'BELOW 5');
//       page = ROUTES.HOME
//   }
//   if(seconds > 10 && seconds < 20){
//         // console.log(seconds, '5 - 10')
//       page = ROUTES.SHOP
//   }
//   if(seconds > 20 && seconds < 30){
//     // console.log(seconds, '10 - 15')
//     page = ROUTES.STORY
//   }
//   return page;
// }

//create array of videos
const videoData = [
  HHJacketPt1,
  HHWaterPt2,
  HHSpiritsPt3,
];

//  let seconds = 0;
// let indexRef = 0;

const VideoPage = ({navigation}) => {

    const [timerVideo, setTimerVideo] = useState(0);
  // const [index, setIndex] = useState(0)
  //   setTimerVideo(seconds)
  //   setIndex(indexRef)
  // let target = 0;
      

  //  useEffect(() => {
// Setting value on playback timer for video 
// let timer = setInterval(() => {
//   // const [timerVideo, setTimerVideo] = useState(0);
//     // const [timerVideo, setTimerVideo] = useState(0);
//     // const [index, setIndex] = useState(0)
//     setTimerVideo(seconds)
//     seconds += 1;

  // if(index === 3){
  //   setIndex(0)
  // }
  // if(seconds >= 20 && seconds < 30){
  //   // setTimerVideo(seconds - 20)
  //   console.log(seconds, '20 - 30')
  // }
  // if(seconds == 30){
  //   seconds = 0;
  //   seconds += 1;
  //   // setTimerVideo(seconds)
  // }
  // return () => clearInterval(timer)
// },
//   1000
// );
  //   if(seconds < 10){
  //   // setTimerVideo(seconds);
  //   //ADD CONSOLE.LOG('ADDING BY 1') TO END OF 'SECONDS += 1' TO READ ACCUMILATING DATA IN CONSOLE
  //   console.log(seconds, '0 - 10');
  // }
  // if(seconds >= 10){
  //   // setTimerVideo(seconds - 10)
  //       seconds = 0;
  //       console.log(indexRef, 'INDEX REF + 1')
  //       console.log(seconds, 'HIT 10 TARGET')
  //       // setIndex(index + 1)
  //       // seconds += 1;
  // }
  //  })
  // setting index for video array 
  const [index, setIndex] = useState(0);
    // ORIGINAL WORKING FUNCTION BELOW
   useEffect(() => {
     setTimerVideo(seconds)

     const toggle = setInterval(() => {
       setIndex( index + 1);
       if(index >= 3){
       setIndex(0)
     }
     }, 10000);
     //MAKE VIDEO ARRAY LOOP BACK TO BEGINNING
     
     return () => clearInterval(toggle);
  })

  //OPTION 2 KIND OF WORKING
  // const [seconds, setSeconds] = useState(0)
  // const [timerVideo, setTimerVideo] = useState(0);
  //   const carousel = useEffect(() => {
  //     setTimerVideo(seconds)
  // if(seconds == 9){
  //   console.log('9 SECONDSSSSSS')
  //   setIndex( 1 )
  // }
  // if(index === 3){
  //   setIndex(0)
  // }
  //    return () => clearInterval(carousel);
  // })

  //OPTION 3 COMBING TIMER AND INDEX AND ALL FUNCTIONS AND PLACING PRE RENDER/RETURN

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
        // key={indexRef}
        source={videoData[index]}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}/>

      </TouchableOpacity>
      {/* <Button title="Test" onPress={() => {
        if(seconds < 10){
          console.log(seconds, 'BELOW 10');
          Linking.openURL('https://hhbespoke.squarespace.com/all/bandana-set')
          navigation.navigate(ROUTES.HOME)
        }
        if(seconds > 10 && seconds < 20){
          console.log(seconds, '10 - 20')
          Linking.openURL('https://hhbespoke.squarespace.com/all/bandana-set')
          navigation.navigate(ROUTES.SHOP)
        }
        if(seconds > 20 && seconds < 30){
          console.log(seconds, '20 - 30')
          Linking.openURL('https://hhbespoke.squarespace.com/all/bandana-set')
          navigation.navigate(ROUTES.STORY)
        }
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