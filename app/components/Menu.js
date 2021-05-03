import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {
  return(
    <View style={styles.wrapper}>
      <Button
         title="Menu"
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    display: 'flex',
    paddingTop: '10%',
    backgroundColor: 'black'
  }
})