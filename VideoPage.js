import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';

let enterDate = new Date();
const secondsSinceEnter = () => {
  return (new Date() - enterDate) / 1000;
}

const handleClick = () => {
  let sec = secondsSinceEnter();
  while(sec < 5) {
    sec++
    console.log(sec, ': seconds, less than 5')
  }
    while(sec > 5 && sec < 10){
      sec++
      console.log(sec, 'more than 5 seconds')
    }
  }
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

// let counter = 0;
// const count = () => {
//   window.onload = () => {
//   setInterval(count, 1000)
//   console.log(count, 'count')
// };

//   // while(0 <= counter && counter <= 5) {
//   //   console.log('0 - 5 seconds', counter);
//   // }
//   // switch(counter){
//   //   case (0 <= counter && counter <= 5):
//   //     console.log('0 - 5 seconds');
//   //     break;

//   //     case 5 < counter < 10:
//   //       console.log('5 - 10 seconds')
//   //       break;

//   //       case 10 < counter < 15:
//   //         console.log('10 - 15 seconds')
//   //         break;

//   //         default: counter = 0;
//   // }
// }
const VideoPage = () => {
  return(
    <View style={{flex: 1}} >
      {handleClick()}
      <Video source={{uri: "https://www.w3schools.com/html/mov_bbb.mp4"}}
      style={{flex: 1}} />
    </View>
  )
}


// Later on in your styles..
var styles = StyleSheet.create({
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