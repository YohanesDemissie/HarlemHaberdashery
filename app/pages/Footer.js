import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import harlemHaberdasheryLogo from '../../assets/harlemHaberdasheryLogo.png';


const Footer = () => {
  return(
    <View>
      <Image source={harlemHaberdasheryLogo} style={styles.footerLogo} />
    </View>
  )
}

const styles = StyleSheet.create ({
  footerLogo: {
    display: 'flex',
    justifyContent: 'center',
    resizeMode: 'cover',
    marginBottom: 100,
    width: 350,
    height: 350
  }
})

export default Footer;