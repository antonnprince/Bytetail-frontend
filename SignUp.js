import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import{useState} from 'react';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {Auth} from 'aws-amplify';

//Amplify.configure(awsconfig);

type SignUpParameters = {
  name:string;
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
};

export async function signUp({ name,username, password, email, phoneNumber }: SignUpParameters) {
  try {
    const { user } = await Auth.signUp({
      name,
      username,
      password,
      attributes: {
        email, 
        phoneNumber, // optional - E.164 number convention
        // other custom attributes
      },
      autoSignIn: {
        // optional - enables auto sign in after user is confirmed
        enabled: true,
      },
    });
    console.log(user);
  } catch (error) {
    console.log('error signing up:', error);
  }
}


const Sign=()=>{

const navigation = useNavigation();

const [email,setEmail] = useState('');
const [username,setUsername] = useState('');
const [name,setName] = useState('');
const [pass,setPass] = useState('');

async function onSubmit(){
  const user = await signUp(name,username,pass,email,)
handleMail,
handleName,
handleUsername
}

const handleUsername=()=>{
console.log(username)
}

const handleMail =()=>{
  console.log(email)
}

const handleName =()=>{
 console.log(name)
}

  return(
   <View style={styles.container}>
          <TouchableOpacity
            onPress={()=>navigation.goBack()}>
              <Image 
              source={require('../assets/back.png')}
              />
          </TouchableOpacity>
          <Text style={styles.paragraph}>
          Sign up for ft.
          </Text>

          <Text style={styles.subtext}>
              Create profile, hop products, make your own vidoes and earn 
          </Text>
          
      <View style={{
        alignContent:'center',
        marginHorizontal:15,
      }}>
          <TextInput 
          style={styles.bars}
          placeholder="Enter phone or email"
          onChangeText={(e)=>{setEmail(e.target.value)}}
          
          />
          <TextInput 
          style={styles.bars}
          placeholder="Full Name"
          onChangeText={(e)=>{setName(e.target.value)}}
          
          />
          <TextInput 
          style={styles.bars}
          placeholder="Username"
          onChangeText={(e)=>{setUsername(e.target.value)}}
          />
          <TextInput 
          style={styles.bars}
          placeholder="Password"
          onChangeText={(e)=>{setPass(e.target.value)}}
          />
            <TouchableOpacity style={styles.button}
            onPress={()=>navigation.navigate("Main")}
            onSubmit
            >
              <Text style={styles.text}>
                SIGN UP
              </Text>
            </TouchableOpacity>

            <Text
            style={{
            textAlign:'center',
            marginTop: 120,
            fontSize:20,
            color:'gray'
            }}
            >
            Already have an account? 
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}> 
                <Text style={{
                  fontWeight:'bold',
                  color:'black'
                }}>
                  Log in
                </Text>
            </TouchableOpacity>
            </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  
  paragraph: {
    marginBottom:30,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtext: {
    fontSize:20,
    textAlign: 'center',
    color:'gray',
    marginBottom:20
  },

  bars: {
    color:'gray',
    backgroundColor:'rgba(194, 194, 194, 0.35)',
    flexDirection:'column',
    marginTop:10,
    fontWeight:'normal',
    padding:13,
    borderRadius:10,
    fontSize:18,
    paddingVertical: 20
  },
  
  button:{
    backgroundColor:'#FA114F',
    padding:14,
    marginTop: 15,
    borderRadius:10,
  },

  text:{
    color: '#FFFFFF',
    fontWeight:'semi-bold',
    textAlign:'center',
    fontSize: 20
  },

})


export default Sign;