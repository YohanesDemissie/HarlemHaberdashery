import React from 'react';
import { View, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {
  return(
        <View style={{flexDirection: 'row', marginTop: '10%'}}>
      <Button
         title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}