import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, Text } from "react-native";
import Menu from '../components/Menu';
import Footer from './Footer';


const Register = ({navigation}) => {
  const [text, onChangeText] = useState("");
  const [email, onChangeEmail] = useState("");
  const [zipCode, onChangeZipCode] = useState("");


  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%'}}>
      <Menu navigation={navigation}/>
      <Text style={{
        fontSize: 40,
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '900',
        color: 'white',
        width: '100%'
        }}
      >Sign Up</Text>

      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Name"
        autoCompleteType="name"
        textContentType="name"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
        autoCompleteType="email"
        textContentType="emailAddress"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeZipCode}
        value={zipCode}
        placeholder="Zip Code"
        autoCompleteType="postal-code"
        textContentType="postalCode"
        placeholderTextColor="white"
        minLength={5}
        maxLength={5}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={() => console.log(text, email, zipCode, 'USER INFO')} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    textAlign: 'center',
    color: 'white'
  }
})
export default Register;