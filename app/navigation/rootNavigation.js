import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {ROUTES} from '../config/constants';
import DrawerMenu from './DrawerMenu';
import Home from '../pages/Home';
import Story from '../pages/Story';
import Shop from '../pages/Shop';
import PressAndEvents from '../pages/PressAndEvents';

// import HomeButtonMenu from './DrawerMenu'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



// //imported from drawer menu and export to app
// //HOME
// export const HomeButtonNavigation = () => (
  //         <Drawer.Navigator  drawerContent={props => <HomeButtonMenu {...props} />}>
  //                 <Drawer.Screen name={ROUTES.HOME} component={Home} />
  {/* </Drawer.Navigator>
    )
    
    //  STORY
    export const StoryButtonNavigation = () => (
      <Drawer.Navigator  drawerContent={props => <HomeButtonMenu {...props} />}>
      <Drawer.Screen name={ROUTES.STORY} component={Story} />
      </Drawer.Navigator>
      )
      
      //SHOP
      export const ShopButtonNavigation = () => (
        <Drawer.Navigator  drawerContent={props => <HomeButtonMenu {...props} />}>
        <Drawer.Screen name={ROUTES.SHOP} component={Shop} />
        </Drawer.Navigator>
      ) */}
      
export function GoToButton({ name }) {
// const navigation = useNavigation();
  return (
    <Button
      title={`Go to ${name}`}
      onPress={() => navigation.navigate(name)}
    />
  );
}

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Story} />
        <Stack.Screen name={`Go to ${screenName}`} component={GoToButton} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
const RootNavigation = ({name}) =>(

  // const navigation = useNavigation();
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={Home} />
      <Drawer.Screen name={ROUTES.STORY} component={Story} />
      <Drawer.Screen name={ROUTES.SHOP} component={Shop} />
      <Drawer.Screen name={ROUTES.PRESSANDEVENTS} component={PressAndEvents} />
      <Drawer.Screen name={`Go to ${name}`} component={GoToButton} />
    </Drawer.Navigator>
  )



export default RootNavigation
