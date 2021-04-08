// // import React from 'react';
// import VideoPage from './VideoPage';
// // import { NavigationContainer } from '@react-navigation/native';

// import RootNavigation from './app/navigation/rootNavigation'
// // import HomeButton from './app/navigation/rootNavigation';
// import { navigationRef } from './app/navigation/navigationService'

// // import {View, Text } from 'react-native'
// import HomeButtonNavigation from './app/navigation/rootNavigation'
// import { SafeAreaProvider } from 'react-native-safe-area-context';
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
//   import * as React from 'react';
// import { Button, View, Text } from 'react-native';
// import { useNavigation, NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Home from './app/pages/Home';
// import Story from './app/pages/Story';
// import Shop from './app/pages/Shop';
// import PressAndEvents from './app/pages/PressAndEvents'
// import { ROUTES } from './app/config/constants';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DrawerMenu from './app/navigation/DrawerMenu';

//this will be the universal naigational button to export
// const navigation = useNavigation();
// export function GoToButton({ name, navigation }) {
//   return (
//     <Button
//       title={`Go to ${name}`}
//       onPress={() => navigation.navigate(name)}
//     />
//   );
// }

// //THIS WILL BE REPLACED WITH ACTUAL HOMESCREEN
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <GoToButton name="DetailScreen" />
//     </View>
//   );
// }

// //THIS WILL BE REPLACED WITH ACTUAL PAGE
// function DetailScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>

//       <GoToButton name="HomeScreen" />
//     </View>
//   );
// }
//END TESTING COMPONENTS

//THIS NEEDS TO BE INCOPORATED TO ORIGINAL APP EXPORT AND ROOTNAVIGATION
// const Stack = createStackNavigator();

// function StackNavigator() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Details" component={Story} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//END STACK NAVIGATOR

// const Drawer = createDrawerNavigator();
// function Navigation() {
//   return (
//     <NavigationContainer ref={navigationRef}>
//     <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
//       <Drawer.Screen name={ROUTES.HOME} component={Home} />
//       <Drawer.Screen name={ROUTES.STORY} component={Story} />
//       <Drawer.Screen name={ROUTES.SHOP} component={Shop} />
//       <Drawer.Screen name={ROUTES.PRESSANDEVENTS} component={PressAndEvents} />
//     </Drawer.Navigator>
//       {/* <Stack.Navigator initialRouteName={ROUTES.HOME}>
//         <Stack.Screen name={ROUTES.HOME} component={Home} />
//         <Stack.Screen name={ROUTES.STORY} component={Story} />
//       </Stack.Navigator> */}
//     </NavigationContainer>
//   );
// }

// const navigation = useNavigation();
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootNavigation from './app/navigation/rootNavigation'
import { navigationRef } from './app/navigation/navigationService'

const App =()=> (
  <NavigationContainer ref={navigationRef}>
      <RootNavigation />
    </NavigationContainer>
  );


export default App

  // export default App
  {/* <NavigationContainer ref={navigationRef}>
        <RootNavigation />
        </NavigationContainer> */}