import React from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Footer from './Footer';
import PEpt1 from '../../assets/HHP&Ept1.png';
import PEpt2 from '../../assets/HHP&Ept2.png';
import PEpt3 from '../../assets/HHP&Ept3.png';
import PEpt4 from '../../assets/HHP&Ept4.png';
import PEpt5 from '../../assets/HHP&Ept5.png';
import PEpt6 from '../../assets/HHP&Ept6.png';
import PEpt7 from '../../assets/HHP&Ept7.png';
import PEpt8 from '../../assets/HHP&Ept8.png';
import PEpt9 from '../../assets/HHP&Ept9.png';
import PEpt10 from '../../assets/HHP&Ept10.png';
import PEpt11 from '../../assets/HHP&Ept11.png';

import Menu from '../components/Menu';

const PressAndEvents = ({navigation}) =>{
  return(
  <ScrollView style={{backgroundColor: 'black'}}>
      <Menu navigation={navigation} />
      <View style={{
        display: 'flex',
        flex: 1,
  	    flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'black',
  	    // // padding: 10,
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '900', color: 'white', width: '100%'}}>Press & Events</Text>
      <TouchableOpacity onPress={() => { Linking.openURL('https://www.esquire.com/style/mens-fashion/a33939/harlem-haberdashery/')}} >
        <Image source={PEpt1}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            margin: 10,
            width: '30%',
            height: '30%',
            padding: 85,
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://www.nytimes.com/2016/06/03/fashion/mens-style/mens-suitmaker-jay-z-lebron-james-guy-wood.html?_r=0')}} >
        <Image source={PEpt2}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            margin: 10,
            width: '30%',
            height: '30%',
            padding: 90,
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://newyork.cbslocal.com/2017/08/29/cityviews-5001-flavors/')}} >
        <Image source={PEpt3}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            margin: 10,
            width: '30%',
            height: '30%',
            padding: 85,
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://mashable.com/2015/10/13/harlem-haberdashery/#h7dDr8KwZgqC')}} >
        <Image source={PEpt4}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            margin: 10,
            width: '30%',
            height: '30%',
            padding: 90,
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('http://www.mannpublications.com/fashionmannuscript/2017/07/26/harlems-retail-royalty-harlem-haberdashery-5001-flavors/')}} >
        <Image source={PEpt5}
          style={{
            display: 'flex',
            flex: 1,
            justifyContent: 'space-evenly',
            margin: 10,
            width: '30%',
            height: '30%',
            padding: 85,
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt6}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 90,
        }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt7}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 85,
        }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt8}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 85,
        }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt9}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 85,
        }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt10}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 85,
        }}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => { Linking.openURL('https://time.com/5002367/celebrity-halloween-costumes-2017/?iid=sr-link2')}} >
       <Image source={PEpt11}
        style={{
          display: 'flex',
          flex: 1,
          justifyContent: 'space-evenly',
          margin: 10,
          width: '30%',
          height: '30%',
          padding: 85,
        }}/>
    </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}

// const styles = StyleSheet.create({
//   gridImage: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: 10,
//     width: '30%',
//   },
//   gridView: {
//     width: '90%',
//     display: 'flex',
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center'
//   }
// })





export default PressAndEvents