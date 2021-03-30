import React from 'react';
import { View, Image } from 'react-native';

import assets from '../../assets/';
import Menu from '../components/Menu';
import { navigationRef } from '../navigation/navigationService';
import Gallery from './Gallery';

const Home = ({ navigation }) =>{
  return(
    <React.Fragment>
      <Menu navigation={navigation} />
      <Gallery />
    </React.Fragment>
  );
}

export default Home



