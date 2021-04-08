import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {ROUTES} from '../config/constants';
import DrawerMenu from './DrawerMenu';
import Home from '../pages/Home';
import Story from '../pages/Story';
import Shop from '../pages/Shop';
import PressAndEvents from '../pages/PressAndEvents';

import HomeButtonMenu from './DrawerMenu'


const Drawer = createDrawerNavigator();

//imported from drawer menu and export to app
//HOME
export const HomeButtonNavigation = () => (
        <Drawer.Navigator  drawerContent={props => <HomeButtonMenu {...props} />}>
                <Drawer.Screen name={ROUTES.HOME} component={Home} />
    </Drawer.Navigator>
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
  )

const RootNavigation = () =>(
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={Home} />
      <Drawer.Screen name={ROUTES.STORY} component={Story} />
      <Drawer.Screen name={ROUTES.SHOP} component={Shop} />
      <Drawer.Screen name={ROUTES.PRESSANDEVENTS} component={PressAndEvents} />
    </Drawer.Navigator>
  );

export default RootNavigation
