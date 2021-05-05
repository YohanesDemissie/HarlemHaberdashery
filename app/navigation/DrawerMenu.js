import React from 'react';
import {Text} from 'react-native'
import { DrawerActions } from '@react-navigation/native';
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import { ROUTES } from '../config/constants';
import NavigationService from './navigationService';

const DrawerMenu = (props)=> (
    <DrawerContentScrollView style={{backgroundColor: '#222222'}} {...props} >
      <DrawerItem 
        label={() => <Text style={{color: 'white'}}>Close Menu X</Text>}
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem 
      label={() => <Text style={{color: 'white'}}>Home</Text>}
      onPress={() => NavigationService.navigate(ROUTES.HOME)}
      />
      <DrawerItem 
        label={() => <Text style={{color: 'white'}}>Story</Text>}
        onPress={() => NavigationService.navigate(ROUTES.STORY)}
      />
      <DrawerItem 
        label={() => <Text style={{color: 'white'}}>Shop</Text>}
        onPress={() => NavigationService.navigate(ROUTES.SHOP)}
      />
      <DrawerItem 
        label={() => <Text style={{color: 'white'}}>Press & Events</Text>}
        onPress={() => NavigationService.navigate(ROUTES.PRESSANDEVENTS)}
      />
    </DrawerContentScrollView>
  );

export default DrawerMenu