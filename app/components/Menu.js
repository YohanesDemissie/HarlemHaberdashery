import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {
  return(
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text style={{color: 'white', marginLeft: 8, fontSize: 18}}>Menu</Text>
        <View style={{borderTopColor: 'white', borderRadius: 3, marginLeft: 8, marginBottom: 5, borderWidth: 1, width: 47, height: 0, top: 0}} />
        <View style={{borderTopColor: 'white', borderRadius: 3, marginLeft: 8, marginBottom: 5, borderWidth: 1, width: 47, height: 0, top: 0, bottom: 0}} />
        <View style={{borderTopColor: 'white', borderRadius: 3, marginLeft: 8, marginBottom: 5, borderWidth: 1, width: 47, height: 0, top: 0}} />
        <View style={{borderTopColor: 'black', marginLeft: 8, borderWidth: 1, width: 47, height: 0, top: 0}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    // flex: 1,
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10%',
    backgroundColor: 'black',
    
    // borderBottomColor: 'white',
    // borderWidth: 1,
    // width: 100
  }
})