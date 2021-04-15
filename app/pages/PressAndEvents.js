import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import harlemHaberdasheryLogo from '../../assets/harlemHaberdasheryLogo.png';
import PEpt1 from '../../assets/HHP&Ept1.png';
import PEpt2 from '../../assets/HHP&Ept2.png';
import PEpt3 from '../../assets/HHP&Ept3.png';
import PEpt4 from '../../assets/HHP&Ept4.png';
import PEpt5 from '../../assets/HHP&Ept5.png';
import PEpt6 from '../../assets/HHP&Ept6.png';

import Menu from '../components/Menu';


const PressAndEvents = ({navigation}) =>{
  return(
    <View style={{width: '90%', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <Menu navigation={navigation} />
      <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '900'}}>Press & Events</Text>
      <View style={{
        display: 'flex',
        flex: 2,
  	    flexDirection: 'row',
  	    flexWrap: 'wrap',
  	    padding: 10,
  	    justifyContent: 'center'
      }}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.esquire.com/style/mens-fashion/a33939/harlem-haberdashery/')}>
        <Image source={PEpt1}
          style={{display: 'flex',
          justifyContent: 'center',
          margin: 10,
          width: '43%',
          height: '43%'
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.nytimes.com/2016/06/03/fashion/mens-style/mens-suitmaker-jay-z-lebron-james-guy-wood.html?_r=0')}>
        <Image source={PEpt2}
          style={{display: 'flex',
          justifyContent: 'center',
          margin: 10,
          width: '43%',
          height: '43%'
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://mashable.com/2015/10/13/harlem-haberdashery/#h7dDr8KwZgqC')}>
        <Image source={PEpt4}
          style={{display: 'flex',
          justifyContent: 'center',
          margin: 10,
          width: '43%',
          height: '43%'
        }}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={Linking.openURL('http://www.mannpublications.com/fashionmannuscript/2017/07/26/harlems-retail-royalty-harlem-haberdashery-5001-flavors/')}>
        <Image source={PEpt5}
          style={{display: 'flex',
          justifyContent: 'center',
          margin: 10,
          width: '43%',
          height: '43%'
        }}/>
      </TouchableOpacity>
      {/* <Image source={PEpt6}
      style={{display: 'flex',
    justifyContent: 'center',
    margin: 10,
    width: '43%',
    height: '43%'
  }}
      /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gridImage: {
    display: 'flex',
    justifyContent: 'center',
    margin: 10,
    width: '30%',
  },
  gridView: {
    width: '90%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})





export default PressAndEvents