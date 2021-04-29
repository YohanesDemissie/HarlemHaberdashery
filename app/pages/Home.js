import React from 'react';
import VideoPage from '../components/VideoPage'

import Menu from '../components/Menu';
import Gallery from './Gallery';

const Home = ({ navigation }) => {
  return(
    <React.Fragment>
      <Menu navigation={navigation} />
      <VideoPage />
      {/* <Gallery /> */}
    </React.Fragment>
  );
}

export default Home



