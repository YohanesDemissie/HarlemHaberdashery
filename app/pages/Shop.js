import React from 'react';
import { View, Text, StyleSheet, Image, Linking, TouchableOpacity, ScrollView} from 'react-native';

import Menu from '../components/Menu';
import Footer from './Footer';


const Shop = ({navigation}) =>{
  return(
    <ScrollView>

      <Menu navigation={navigation}  />
      <View style={styles.shopStyles}>
        <Text style={{fontSize: 40, marginTop: 20}}>Shop</Text>
        <View style={styles.breakLine} />

        <View style={styles.gallery}>
          <TouchableOpacity onPress={() => Linking.openURL('https://hhbespoke.squarespace.com/all/bandana-set')}>
            <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593275277745-OACM54MKRZQO44SKFNQR/ke17ZwdGBToddI8pDm48kEPqoMFOhzA3q4A3VFGcFLt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fI1iYD9xHJo2JLxv6AwumxWIst0C1lSCh1N30TSGvFFpQ/DSC_0663.jpeg?format=2500w'}}  />
            <Text style={styles.label}>HH Bandana Set</Text>
            <Text style={styles.subLabel}>$400.00</Text>
          </TouchableOpacity>

          <View style={styles.subBreakLine} />

          <TouchableOpacity onPress={() => Linking.openURL('https://hhbespoke.squarespace.com/all/limited-edition')}>
            <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1598617862872-3X0BDIIIW0TGKJFOHWPD/ke17ZwdGBToddI8pDm48kLBnCuLS4rYL7yVlMx_8oR57gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UeSDz6IyKK09zZ-7q_gpQHSSpVyuY93tgEx5P2GE3RQd71VtgaaASevlyRsadXtEgw/81A78181-AB86-4946-B6B7-A34ED18BB982?format=2500w'}} />
            <Text style={styles.label}>HH Bandana Set</Text>
            <Text style={styles.subLabel}>$400.00</Text>
          </TouchableOpacity>

          <View style={styles.subBreakLine} />

          <TouchableOpacity onPress={() => Linking.openURL('https://hhbespoke.squarespace.com/all/harlembubbletee')}>
            <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593197232725-1ZYV2DNMPCGABCP8SXS1/ke17ZwdGBToddI8pDm48kEPqoMFOhzA3q4A3VFGcFLt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fI1iYD9xHJo2JLxv6AwumxWIst0C1lSCh1N30TSGvFFpQ/DSC_0246.jpeg?format=2500w'}} />
            <Text style={styles.label}>HH Bandana Set</Text>
            <Text style={styles.subLabel}>$400.00</Text>
          </TouchableOpacity>

          <View style={styles.subBreakLine} />

          <TouchableOpacity onPress={() => Linking.openURL('https://hhbespoke.squarespace.com/all/levi-denim')}>
            <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://images.squarespace-cdn.com/content/v1/5a79c4d46957dae99fcee4e1/1593388662359-5L1N5EKXGMCVH0YQVR72/ke17ZwdGBToddI8pDm48kEPqoMFOhzA3q4A3VFGcFLt7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fI1iYD9xHJo2JLxv6AwumxWIst0C1lSCh1N30TSGvFFpQ/DSC_0673.jpeg?format=2500w'}} />
            <Text style={styles.label}>HH Bandana Set</Text>
            <Text style={styles.subLabel}>$400.00</Text>
          </TouchableOpacity>

          <View style={styles.subBreakLine} />

          <TouchableOpacity onPress={() => Linking.onPress('')}>
            <Image style={{width: 200, height: 200, borderRadius: 10}} source={{uri: 'https://i.pinimg.com/originals/e0/3d/5b/e03d5b812b2734826f76960eca5b5541.jpg'}} />
            <Text style={styles.label}>HH Bandana Set</Text>
            <Text style={styles.subLabel}>$400.00</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.breakLine} />
        <Footer />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  shopStyles: {
    textAlign: 'center',
    alignItems: 'center',
  },
  gallery: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',

    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  label: {
    fontSize: 25,
    marginTop: 20,
    textAlign: 'center'
  },
  subLabel: {
    fontSize: 15,
    marginBottom: 40,
    textAlign: 'center'
  },
  breakLine: {
    marginTop: 30, marginBottom: 30,
    borderBottomWidth: 3,
    borderBottomColor: 'black',
    width: 300
  },
  subBreakLine: {
    marginBottom: 60,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    width: 200
  }
})

export default Shop;