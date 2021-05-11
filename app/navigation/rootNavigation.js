import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {ROUTES} from '../config/constants';
import DrawerMenu from './DrawerMenu';
import Home from '../pages/Home';
import Story from '../pages/Story';
import Shop from '../pages/Shop';
import PressAndEvents from '../pages/PressAndEvents';
import Register from '../pages/Register';

const Drawer = createDrawerNavigator();
const RootNavigation = () =>(
    <Drawer.Navigator drawerContent={props => <DrawerMenu {...props} />}>
      <Drawer.Screen name={ROUTES.HOME} component={Home}  />
      <Drawer.Screen name={ROUTES.STORY} component={Story} />
      <Drawer.Screen name={ROUTES.SHOP} component={Shop} />
      <Drawer.Screen name={ROUTES.PRESSANDEVENTS} component={PressAndEvents} />
      <Drawer.Screen name={ROUTES.REGISTER} component={Register} />
    </Drawer.Navigator>
);

export default RootNavigation
