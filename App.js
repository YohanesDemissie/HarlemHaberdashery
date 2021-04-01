import React from 'react';
import VideoPage from './VideoPage';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './app/navigation/rootNavigation'
import { navigationRef } from './app/navigation/navigationService'

const App = () => (
    // <NavigationContainer ref={navigationRef}>
    //   <RootNavigation />
    // </NavigationContainer>
  <VideoPage />
  );


export default App