import React, { Component } from 'react';
import Video from 'react-native-video';
import { View, Image, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import HHLogoBlack from '../../assets/HHLogoBlack.png'
import HHLogoPatchVideo from '../../assets/videos/HHLogoPatchVideo.mp4';
import HHJacketVideo from '../../assets/videos/HHJacketVideo.mp4';
import HHWaterVideo from '../../assets/videos/HHWaterVideo.mp4';
import HHSpiritsVideo from '../../assets/videos/HHSpiritsVideo.mp4';
import HHHatVideo from '../../assets/videos/HHHatVideo.mp4';
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

timer = setInterval(() => {
  this.setState({seconds: this.state.seconds += 1});
  if(this.state.index === 5){
    this.setState({index: 0});
    this.setState({ seconds: 0});
    console.log(this.state.seconds, 'this.state.seconds')
  }
  if(this.state.seconds > 7){
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
    HHHatVideo,
    HHJacketVideo,
    HHLogoPatchVideo,
    HHWaterVideo,
    HHSpiritsVideo
];

const TextProduct = () => {
  let product = '';
  if(this.state.index === 0){
    product = 'Hat'
  }
  if(this.state.index === 1){
    product = 'Leather Coat'
  }
  if(this.state.index === 2){
    product = 'HH Patch'
  }
  if(this.state.index === 3){
    product = 'Marvelous Water'
  }
  if(this.state.index >= 4){
    product = 'HH Spirits'
  }
  return <Text style={styles.purchaseButton}>Tap to Pruchase {product}</Text>
}
  return(
    <View style={styles.videoWrapper}>
      {/* <Menu navigation={navigation} /> */}
      <Image source={HHLogoBlack} style={styles.logo} />
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {
          if(this.state.index === 0){
            console.log(this.state.seconds, 'PURCHASING JACKET');
            Linking.openURL('https://www.harlemhaberdashery.com/')
          } else
          if(this.state.index === 1){
            console.log(this.state.seconds, 'PURCHASING JACKET');
            Linking.openURL('https://www.harlemhaberdashery.com/')
          } else
          if(this.state.index === 2){
            console.log(this.state.seconds, 'PURCHASING PATCH')
            Linking.openURL('https://hhbespoke.squarespace.com/all/hhblackpatch')
          } else
          if(this.state.index === 3){
            console.log(this.state.seconds, 'PURCHASING WATER')
            Linking.openURL('https://www.marvelouswaters.com/buy')
          }
          if(this.state.index >= 4){
            console.log(this.state.seconds, 'PURCHASING LIQUOR')
            Linking.openURL('https://hhbespokespirits.com/buy-now')
          }
        }}>
        <Video
          fullscreen={false}
          resizeMode="contain"
          source={videoData[this.state.index]}
          seekTime={this.state.seconds}
          muted={true}
          style={styles.video}/>
          <TextProduct />
        </TouchableOpacity>
    </View>
  )
}
}

const styles = StyleSheet.create({
  purchaseButton: {
    color: 'white',
    textAlign: 'center',
    marginTop: 300,
    fontSize: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 15,
    padding: 10
  },
  videoWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    justifyContent: 'center'
  },
  logo: {
    alignSelf: 'center',
    width: 200,
    height: 200
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1
  },
  video: {
    height: '60%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }
})


export default VideoTest