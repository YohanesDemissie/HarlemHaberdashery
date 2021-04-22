import React from 'react';
import VideoPage from './VideoPage'
import VideoTest from '../components/VideoTest'

import Menu from '../components/Menu';
import Gallery from './Gallery';

const Home = ({ navigation }) => {
  return(
    <React.Fragment>
      <Menu navigation={navigation} />
      <VideoTest />
      {/* <Gallery /> */}
    </React.Fragment>
  );
}

export default Home



