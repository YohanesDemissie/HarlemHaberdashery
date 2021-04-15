import React from 'react';
import { View, Text, Image } from 'react-native';
import harlemHaberdasheryLogo from '../../assets/harlemHaberdasheryLogo.png';

import Menu from '../components/Menu';


const PressAndEvents = ({navigation}) =>{
  return(
    <View>
      <Menu navigation={navigation} />
      <View style={{
      display: 'flex',
      flex: 1,
  	flexDirection: 'column',
  	flexWrap: 'wrap',
  	padding: 10,
  	// height: 100vw;
    }}>
      <Image source={harlemHaberdasheryLogo}
      style={{isplay: 'flex',
    justifyContent: 'center',
    // resizeMode: 'cover',
    marginBottom: 100,
    width: '30%',
    // height: 350
  }}
      />
      </View>

      <Text>Press & Events</Text>
    </View>
  );
}



export default PressAndEvents