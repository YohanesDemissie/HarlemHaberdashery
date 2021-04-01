import React from 'react';
import Video from 'react-native-video';
import { StyleSheet } from 'react-native';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import Menu from './app/components/Menu';
import Home from './app/pages/Home';
import Story from './app/pages/Story';
import Shop from './app/pages/Shop'


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
     if(seconds <= 5){
      console.log(seconds, 'BELOW 5');
    return (<Home />)
  }
  if(seconds > 5 && seconds <= 10){
        console.log(seconds, '5 - 10')
      return <Story />
  }
  if(seconds > 10 && seconds < 15){
    console.log(seconds, '10 - 15')
    return <Shop />
  }
}

const VideoPage = ({ navigation }) => {
  return(
    <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', padding: 20, marginTop: 50}} >
      <Menu navigation={navigation} style={{textAlign: 'center'}}/>

      <Button
      style={{marginTop: 50}}
        title="Press me"
        onPress={() => handleClick()}
      />
      <Video source={{uri: "https://www.w3schools.com/html/mov_bbb.mp4"}}
      style={{flex: 1}} />
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