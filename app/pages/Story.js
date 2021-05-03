import React from 'react';
import { Text, Image, StyleSheet, ScrollView, View, Linking } from 'react-native';

import Menu from '../components/Menu';
import hhStoryImage from '../../assets/hhStoryImage.png';
import Footer from './Footer';

const Story =({navigation})=> {
  return(
    <View style={styles.viewStyle}>
    <ScrollView>
      <Menu navigation={navigation} style={{textAlign: 'center', color: 'white'}}/>
      <Text style={styles.header}>Our Story...</Text>
      <View style={styles.breakLine} />
      <Image style={styles.storyImage} source={hhStoryImage} onPress={Linking.openURL('google.com')}/>
      <View style={styles.breakLine} />
        <Text style={styles.textStyle}>​HARLEM HABERDASHERY IS the retail expression of 5001 FLAVORS, a custom-made apparel company creating looks for celebrities, recording artists and sports stars for over 20 years.
        {"\n"}
        {"\n"}
        IN OUR NEW uptown boutique, Harlem Haberdashery draws inspiration from the rich cultural history and distinctive style of the Harlem Renaissance while adding a future-forward edge to our exclusive designs. The result is a classic silhouette set off by our definitive xpression of today’s fashion.
        {"\n"}
        {"\n"}
        AT HARLEM HABERDASHERY we know that dressing well is an expression of success, defined as living well and enjoying life on your own terms. At the Haberdashery every guest is a celebrity who can create their own personal expression of Success in collaboration with our design staff. Our goal is to provide a Red Carpet experience for all of our guests.
        {"\n"}
        {"\n"}
        WE ACHIEVE THIS by creating head-to-toe looks from our own clothing lines complete with shoes and one-of-a-kind accessories. Our collection is exclusive to Harlem Haberdashery and not available anywhere else in the world. Each item of clothing from our signature line is designed and made in our own Harlem facility while accessories and other collections are handpicked from niche designers and offered exclusively at the Haberdashery.
        {"\n"}
        {"\n"}
        WE INVITE YOU to make our showroom your own private club. Relax, and explore your own personal expression of Success at Harlem Haberdashery.
        {"\n"}
        {"\n"}
        <Footer />
        </Text>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white'
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    color: 'white'
  },
  breakLine: {
    marginTop: 30, 
    marginBottom: 30,
    width: '80%',
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'white',
  },
  storyImage: {
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 300,
    height: 300,
  },
  inputContainer: {
    padding: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'red',
  },
  textStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
    width: '80%',
    height: '100%'
  },
});


export default Story