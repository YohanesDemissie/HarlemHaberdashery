import React from 'react';

import Menu from '../components/Menu';
import Gallery from './Gallery';

const Home = ({ navigation }) => {
  return(
    <React.Fragment>
      <Menu navigation={navigation} />
      <Gallery />
    </React.Fragment>
  );
}

export default Home



