import React from 'react';
//adding/testing routes
import { ROUTES } from '../config/constants'
import NavigationService from '../navigation/navigationService';
// end testing
import { View, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';


//KEY COMPONENT TO NAVIGATION BUTTONS
const HomeMenuNavigationButton = () => {
  return(
    <View style={{flexDirection: 'row', marginTop: '10%'}}>
    <Button title="HomeMenuNavigationButton"
      onPress={() => NavigationService.navigate(ROUTES.HOME)} />
    </View>
      )
}

const StoryMenuNavigationButton = () => {
  return(
    <View style={{flexDirection: 'row', marginTop: '10%'}}>
    <Button title="StoryMenuNavigationButton"
      onPress={() => NavigationService.navigate(ROUTES.STORY)} />
    </View>
      )
}

const ShopMenuNavigationButton = () => {
  return(
    <View style={{flexDirection: 'row', marginTop: '10%'}}>
    <Button title="ShopMenuNavigationButton"
      onPress={() => NavigationService.navigate(ROUTES.SHOP)} />
    </View>
      )
}

export default ({ navigation }) => {
  return(
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
      {/* <Button
        title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      /> */}
      <HomeMenuNavigationButton />
    </View>
  )
}