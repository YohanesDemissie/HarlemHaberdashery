import React from 'react';
import VideoPage from './VideoPage';
// import { Video } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './app/navigation/rootNavigation'
import { navigationRef } from './app/navigation/navigationService'

const App = () => (
  <VideoPage />
  );


export default App