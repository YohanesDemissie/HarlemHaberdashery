import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { ROUTES } from '../config/constants';
import NavigationService from './navigationService';


//exporting to use in APP js and then into Video.js
//export this to rootNavigation
//HOME
// export const HomeButtonMenu = (props) => (
//   <DrawerContentScrollView {...props}>
//     <DrawerItem
//       label="Home"
//       onPress={() => NavigationService.navigate(ROUTES.HOME)}
//     />
//   </DrawerContentScrollView>
// )

// //STORY
// export const StoryButtonMenu = (props) => (
//   <DrawerContentScrollView {...props}>
//     <DrawerItem
//       label="Story"
//       onPress={() => NavigationService.navigate(ROUTES.STORY)}
//     />
//   </DrawerContentScrollView>
// )

// //SHOP
// export const ShopButtonMenu = (props) => (
//   <DrawerContentScrollView {...props}>
//     <DrawerItem
//       label="Shop"
//       onPress={() => NavigationService.navigate(ROUTES.SHOP)}
//     />
//   </DrawerContentScrollView>
// )

const DrawerMenu = (props, name)=> (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label="Close Menu X"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
      label="Home"
      onPress={() => NavigationService.navigate(ROUTES.HOME)}
      />
      <DrawerItem
        label="Story"
        onPress={() => NavigationService.navigate(ROUTES.STORY)}
      />
      <DrawerItem
        label="Shop"
        onPress={() => NavigationService.navigate(ROUTES.SHOP)}
      />
      <DrawerItem
        label="Press & Events"
        onPress={() => NavigationService.navigate(ROUTES.PRESSANDEVENTS)}
      />
      <DrawerItem
      label=''
      onPress={() => NavigationService.navigate(name)}
      />
    </DrawerContentScrollView>
  );

export default DrawerMenu