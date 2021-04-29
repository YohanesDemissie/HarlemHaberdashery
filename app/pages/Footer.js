import React from 'react';
import { StyleSheet, View, Image, Linking, TouchableOpacity } from 'react-native';
import harlemHaberdasheryLogo from '../../assets/HHLogoBlack.png';
import FacebookIcon from '../../assets/FacebookIconBlack.png';
import InstagramIcon from '../../assets/InstagramIconBlack.png';
import TwitterIcon from '../../assets/TwitterIconBlack.png';

const Footer = () => {
  return(
    <View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignSelf: 'center', width: '60%'}}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/HarlemHaberdashery/')}>
          <Image source={FacebookIcon} style={{ alignSelf: 'center', width: 40, height: 40}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/haberdasherynyc/')}> 
          <Image source={InstagramIcon} style={{ alignSelf: 'center', width: 40, height: 40}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/haberdasherynyc/')}>
          <Image source={TwitterIcon} style={{ alignSelf: 'center', width: 40, height: 40}}/>
        </TouchableOpacity>
      </View>
      <Image source={harlemHaberdasheryLogo} style={styles.footerLogo} />
    </View>
  )
}

const styles = StyleSheet.create ({
  footerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
    marginBottom: 100,
    width: 350,
    height: 350
  }
})

export default Footer;