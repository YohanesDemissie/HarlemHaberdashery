import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { ROUTES } from '../config/constants';
import NavigationService from './navigationService';

const DrawerMenu = (props)=> (
    <DrawerContentScrollView {...props} >
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
    </DrawerContentScrollView>
  );

export default DrawerMenu