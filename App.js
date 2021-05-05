import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigation from './app/navigation/rootNavigation';
import { navigationRef } from './app/navigation/navigationService';

const App =()=> (
  <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );

export default App;