import React, { useEffect, useState } from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Menu from '../components/Menu';
import HHJacketPt1 from '../../assets/videos/HHJacketPt1.mp4';
import HHWaterPt2 from '../../assets/videos/HHWaterPt2.mp4';
import HHSpiritsPt3 from '../../assets/videos/HHSpiritsPt3.mp4';

import {ROUTES} from '../config/constants';
//create array of videos
const videoData = [
  HHJacketPt1,
  HHWaterPt2,
  HHSpiritsPt3,
];

let seconds = 0;
let index = 0;

const VideoLoop = (props) => {
  const [index, setIndex] = useState(0);

   useEffect(() => {
     const toggle = setInterval(() => {
       setIndex(index += 1);
     }, 10000);

    //  return () => clearInterval(toggle);
  })

  if(index === 3){
    setIndex(0)
  }

  return <Video source={videoData[index]} 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }} />;
}
const VideoPage = ({navigation}) => {
//   const [index, setIndex] = useState(0);
//   const [seconds, setSeconds] = useState(0);

// const timer = setInterval(() => {
//   seconds += 1;
//   if(index > 2){
//     index = 0;
//     console.log(seconds, 'seconds')
//   }
//   if(seconds >= 10){
//     // setIndex(index += 1);
//     // setSeconds(0);
//     seconds = 0;
//     index = index + 1;
//   }
//   console.log(seconds, index);
//   // const [index, setIndex] = useState(0);
//   console.log(index, 'INDEX STATE')
// },
//   1000
// );

console.log(index, 'INDEXXX')
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      {/* <Menu navigation={navigation} /> */}
      {/* <TouchableOpacity style={{display: 'flex', flex: 1}} onPress={() => {
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
      }}> */}

        <VideoLoop />

      {/* <Video
        // fullscreen={true}
        // resizeMode="cover"
        source={videoData[index]}
        seekTime={seconds}
        muted={true}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0
        }}/> */}

      {/* </TouchableOpacity> */}
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