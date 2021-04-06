import React from 'react';
import VideoPage from './VideoPage';
import { NavigationContainer } from '@react-navigation/native';

// import RootNavigation from './app/navigation/rootNavigation'
// import HomeButton from './app/navigation/rootNavigation';
import { navigationRef } from './app/navigation/navigationService'

import {View, Text } from 'react-native'
import HomeButtonNavigation from './app/navigation/rootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';

// export const HomeButtonApp = ({ navigation}) => {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <HomeButtonNavigation  />
//      </NavigationContainer>
//   )
// }


const App = () => (
    // <SafeAreaProvider>
  //   <View style={{display: 'flex', flex:1, flexDirection: 'column', justifyContent: 'center', padding: 20, marginTop: 50}}>
  //     <Text>Hello??</Text>
  //     <VideoPage />
  //  </View>
  <VideoPage />

    // </SafeAreaProvider>
  );

  export default App
  {/* <NavigationContainer ref={navigationRef}>
        <RootNavigation />
        </NavigationContainer> */}