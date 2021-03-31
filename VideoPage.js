import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'react-native';
import Home from './app/pages/Home';
import Story from './app/pages/Story';
import Shop from './app/pages/Shop'


let seconds = 0;
//ADD CONSOLE.LOG('ADDING BY 1') TO END OF 'SECONDS += 1' TO READ ACCUMILATING DATA IN CONSOLE
let timer = setInterval(() => {
  seconds += 1;
  if(seconds <= 5){
    console.log(seconds, '0 - 5');
    // return <Home />
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
      // return <Story />
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
    // return <Shop />
  }
  if(seconds >= 15){
    seconds = 0;
    seconds += 1;
  }
},
  1000
);

//handle click to coordinate right timing with right item to checkout
// function handleClick() {
//   if(timer <= 5){
//       console.log(timer, 'BELOW 5');
//     // return <Home />
//   }
//   if(timer > 5 && timer <= 10){
//         console.log(timer, '5 - 10')
//       // return <Story />
//   }
//   if(timer > 10 && timer < 15){
//     console.log(timer, '10 - 15')
//     // return <Shop />
//   }
  // if(timer >= 15){
  //   timer = 0;
  //   timer += 1;
  // }
  // return timer
// }

// BELOW THE SECONDS VARIABLE HOLDS THE VALUE OF TIME!!!!!!!!!!!!!!!!!!!!!!!

const VideoPage = () => {
  return(
    <View style={{flex: 1}} >
      <Text>
        {timer}
        {/* {handleClick()} */}
      </Text>
      {/* <Button onPress={handleClick()} title={'Timer'}>Timer</Button> */}
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