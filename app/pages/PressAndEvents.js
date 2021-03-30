import React from 'react';
import { View, Text } from 'react-native';

import Menu from '../components/Menu';


const PressAndEvents = ({navigation}) =>{
  return(
    <View>
      <Menu navigation={navigation} />
      <Text>Press & Events</Text>
    </View>
  );
}

export default PressAndEvents