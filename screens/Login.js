import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
//import React from 'react';
import { Picker, PickerItem } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';



const LoginPage = () => {

  const navigation = useNavigation();


  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handlePhoneNumberLogin = () => {
    // Perform phone number authentication logic
    // e.g., send OTP, verify OTP, etc.
    console.log('Phone number login:', phoneNumber);
  };

  const handleGmailLogin = () => {
    // Perform Gmail authentication logic
    console.log('Gmail login:', email);
  };

  const [selectedValue, setSelectedValue] = useState('');

  return (
    <View style={styles.Container}>
    <TouchableOpacity
    onPress={()=>navigation.goBack()}
            style={styles.back}
            >
              <Image 
              source={require('../assets/back.png')}
              />
          </TouchableOpacity>
      <Text style={styles.Title}>Login to ft.</Text>
      <Text style={styles.Title2}>
        Ft. will send you a text with a verification code
      </Text>

      <View style={styles.Inputwrapper}>
        <Picker
        style={styles.Dropdown}
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
        <Picker.Item label="1" value="option1" />
        <Picker.Item label="2" value="option2" />
        <Picker.Item label="3" value="option3" />
      </Picker>
        <TextInput
          style={styles.Input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />
      </View>

      <TouchableOpacity style={styles.Button} onPress={handlePhoneNumberLogin,  ()=>navigation.navigate('Main')
      }>
        <Text style={styles.ButtonText}>Continue</Text>
      </TouchableOpacity>

      <Text style={styles.Or}>---------------------------OR--------------------------</Text>

      <TouchableOpacity style={styles.Buttonemail} onPress={handleGmailLogin}>
        <Text style={styles.ButtonText2}>Login with Gmail</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 10,
  },
  Title: {
    fontSize: 30,
    fontFamily:'Inter',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign:'center',
  },
  Title2: {
    fontFamily:'Inter',
    fontWeight: 400,
    marginBottom: 20,
    color: '#8E8E8E',
    fontSize:13,
    linelenght : 17,
    textAlign:'center',
  },
  Inputwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  Dropdown: {
  height: 50,
  width: 70,
  borderRadius: 12,
  borderWidth: 1,
  border: '1px solid rgba',
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
  borderColor: 'grey',
  textAlign: 'center',
  color:'black',
},

  Input: {
    flex: 1,
    height: 50,
    width: 230,
    marginLeft: 10,
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 12,
    color: '#8E8E8E',
    border: '1px solid rgba(0,0,0,0.15)',
    fontSize: 14,
    fontWeight: 500,
    fontFamily:'Inter',
    
    
  },
  Or: {
    color: 'lightgrey',
    fontSize:12,
    marginBottom:20,
  },
  Button: {
    backgroundColor: '#FA114F',
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 30,
  },
  ButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 650,
    fontFamily:'Inter'
  },

  ButtonText2: {
    color: 'grey',
    fontSize: 15,
    fontWeight: 650,
    fontFamily:'Inter',
    width:136,
    height:17,
    justifyContent:'centre',
    
    
  },

  Buttonemail: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'darkgrey',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    height:60
    
  },

  back:{
    position: 'absolute',
    top: StatusBar.currentHeight + 40,
    left: 10,
  },
});

export default LoginPage;
