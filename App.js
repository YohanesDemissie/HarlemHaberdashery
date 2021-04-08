// import React from 'react';
import VideoPage from './VideoPage';
// import { NavigationContainer } from '@react-navigation/native';

// import RootNavigation from './app/navigation/rootNavigation'
// import HomeButton from './app/navigation/rootNavigation';
import { navigationRef } from './app/navigation/navigationService'

// import {View, Text } from 'react-native'
import HomeButtonNavigation from './app/navigation/rootNavigation'
import { SafeAreaProvider } from 'react-native-safe-area-context';

// export const HomeButtonApp = ({ navigation}) => {
//   return (
//     <NavigationContainer ref={navigationRef}>
//       <HomeButtonNavigation  />
//      </NavigationContainer>
//   )
// }


// const App = () => (
//     // <SafeAreaProvider>
//   //   <View style={{display: 'flex', flex:1, flexDirection: 'column', justifyContent: 'center', padding: 20, marginTop: 50}}>
//   //     <Text>Hello??</Text>
//   //     <VideoPage />
//   //  </View>
//   <VideoPage />

//     // </SafeAreaProvider>
//   );

  //NEW TING
  import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/pages/Home';
import Story from './app/pages/Story';

export function GoToButton({ name }) {
  const navigation = useNavigation();
  return (
    <Button
      title={`Go to ${name}`}
      onPress={() => navigation.navigate(name)}
    />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <GoToButton name="DetailScreen" />
    </View>
  );
}

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>

      <GoToButton name="HomeScreen" />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//END NEW TING!

export default App;

  // export default App
  {/* <NavigationContainer ref={navigationRef}>
        <RootNavigation />
        </NavigationContainer> */}