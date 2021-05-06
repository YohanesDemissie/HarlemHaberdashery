import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Footer from './Footer';
import Menu from '../components/Menu';

const PressAndEvents = ({navigation}) =>{
  return(
  <ScrollView style={styles.pageContainer}>
      <Menu navigation={navigation} />
      <View style={styles.contentWrapper}>
      <Text style={styles.title}>Press & Events</Text>
      <TouchableOpacity onPress={() => { Linking.openURL('https://www.esquire.com/style/mens-fashion/a33939/harlem-haberdashery/')}} >
        <Image source={require('../../assets/HHP&Ept1.png')}
          style={styles.images}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://www.nytimes.com/2016/06/03/fashion/mens-style/mens-suitmaker-jay-z-lebron-james-guy-wood.html?_r=0')}} >
        <Image source={require('../../assets/HHP&Ept2.png')}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://newyork.cbslocal.com/2017/08/29/cityviews-5001-flavors/')}} >
        <Image source={require('../../assets/HHP&Ept3.png')}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://mashable.com/2015/10/13/harlem-haberdashery/#h7dDr8KwZgqC')}} >
        <Image source={require('../../assets/HHP&Ept4.png')}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('http://www.mannpublications.com/fashionmannuscript/2017/07/26/harlems-retail-royalty-harlem-haberdashery-5001-flavors/')}} >
        <Image source={require('../../assets/HHP&Ept5.png')}
          style={styles.images}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={require('../../assets/HHP&Ept6.png')}
        style={styles.images}
        />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={require('../../assets/HHP&Ept7.png')}
        style={styles.images}
        />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={require('../../assets/HHP&Ept8.png')}
        style={styles.images}
        />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={require('../../assets/HHP&Ept9.png')}
        style={styles.images}
        />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
      <Image source={require('../../assets/HHP&Ept10.png')}
       style={styles.images}
      />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={require('../../assets/HHP&Ept11.png')}
        style={styles.images}
        />
    </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    backgroundColor: 'black'
  },
  contentWrapper: {
    display: 'flex',
    flex: 1,
  	flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'black',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: '900',
    color: 'white',
    width: '100%'
  },
  images: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    margin: 10,
    width: '30%',
    height: '30%',
    padding: 85,
    borderRadius: 5
  }
})





export default PressAndEvents