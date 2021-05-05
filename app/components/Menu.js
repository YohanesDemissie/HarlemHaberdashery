import React from 'react';
import { View, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';

export default ({ navigation }) => {
  return(
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Text style={styles.menu}>Menu</Text>
        <View style={styles.menuLines} />
        <View style={styles.menuLines} />
        <View style={styles.menuLines} />
        <View style={styles.menuLinePlaceHolder} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10%',
    backgroundColor: 'black',
  },
  menu: {
  color: 'white',
  marginLeft: 8,
  fontSize: 18
  },
  menuLines: {
    borderTopColor: 'white',
    marginLeft: 8,
    marginBottom: 5,
    borderWidth: 1,
    width: 47,
    height: 0,
    top: 0
  },
  menuLinePlaceHolder: {
    borderTopColor: 'black',
    marginLeft: 8,
    borderWidth: 1,
    width: 47,
    height: 0,
    top: 0
  }
});