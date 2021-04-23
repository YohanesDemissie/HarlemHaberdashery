import React, { Component } from 'react';
import Video from 'react-native-video';
import { View, Text, Button, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import Menu from '../components/Menu';
import HHJacketPt1 from '../../assets/videos/HHJacketPt1.mp4';
import HHWaterPt2 from '../../assets/videos/HHWaterPt2.mp4';
import HHSpiritsPt3 from '../../assets/videos/HHSpiritsPt3.mp4';

class VideoTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index: 0,
        seconds: 0
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
}

forceUpdateHandler(){
    this.forceUpdate();
  };


  // const [index, setIndex] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  //TRY UPDATING STATE USING REACT NATIVE METHOD

timer = setInterval(() => {
  this.setState({seconds: this.state.seconds += 1});
  if(this.state.index === 3){
    this.setState({index: 0});
    this.setState({ seconds: 0});
    console.log(this.state.seconds, 'this.state.seconds')
  }
  if(this.state.seconds >= 10){
    this.setState({index: this.state.index += 1})
    this.setState({seconds: 0});
    // this.state.index = this.state.index + 1;
  }
  console.log(this.state.seconds, this.state.index);
  // const [this.state.index, setIndex] = useState(0);
  console.log(this.state.index, 'INDEX STATE')
},
  1000
);

render() {
  const videoData = [
    HHJacketPt1,
    HHWaterPt2,
    HHSpiritsPt3,
];
  return(
    <View style={{display: 'flex', flex: 1, flexDirection: 'column'}}>
      {/* <Menu navigation={navigation} /> */}
      <TouchableOpacity style={{display: 'flex', flex: 1}} onPress={() => {
        if(this.state.index === 0){
          console.log(this.state.seconds, 'PURCHASING JACKET');
          Linking.openURL('https://www.harlemhaberdashery.com/')
        } else
        if(this.state.index === 1){
          console.log(this.state.seconds, 'PURCHASING WATER')
          Linking.openURL('https://www.marvelouswaters.com/buy')
        } else
        if(this.state.index >= 2){
          console.log(this.state.seconds, 'PURCHASING LIQUOR')
          Linking.openURL('https://hhbespokespirits.com/buy-now')
        }
      }}>

      <Video
        // fullscreen={true}
        // resizeMode="cover"
        source={videoData[this.state.index]}
        seekTime={this.state.seconds}
        muted={true}
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
}


export default VideoTest