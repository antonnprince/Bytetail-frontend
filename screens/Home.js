import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from "@react-navigation/native";

const Home =()=>{

  const navigation = useNavigation();

  return(

    <View style={styles.container}>
    <View style={{top:-50}}>
              <Text style={styles.paragraph}>
              Sign up for ft.
              </Text>

              <Text style={styles.subtext}>
                  Create profile, hop products, make your own vidoes and earn 
              </Text>
              
          <View style={{
            flexDirection:'column',
            marginHorizontal:15,
          }}>
              <TouchableOpacity style={styles.button}  onPress={()=>navigation.navigate("SignUp")}>
                <Text>
                  Use phone or email
                </Text>
              </TouchableOpacity>
            
              <TouchableOpacity style={styles.button}>
                <Text>
                  Continue with Facebook
                </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button}>
                <Text>
                  Continue with Google
                </Text>
              </TouchableOpacity>
            </View>
        </View>
        <View style={{marginTop: 120}}>
         
         <Text style={styles.privacy}>
            By continuing, you agree to <Text style={{fontWeight:'bold',color:'black'}}>Terms of Service</Text>         and confirm 
            that you have read <Text style={{fontWeight:"bold",color:'black'}}>Privacy Policy</Text>
            </Text>

            <Text
            style={{
            textAlign:'center',
            fontSize:20,
             color:'gray'
            }}
            >
            Already have an account?  
            <TouchableOpacity onPress={()=>navigation.navigate("Login")}> 
                <Text style={{
                  fontWeight:'bold',
                  color:'black',
                  fontSize:18
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
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 5,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  button: {
    backgroundColor:'transparent',
    marginTop:10,
    padding:18,
    borderRadius:10,
    fontSize:40,
    borderColor:'gray',
    borderWidth:1,
    justifyContent:'center',
    alignItems: 'center',
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
  
  privacy: {
    textAlign:'center',
    fontSize:17,
    color:'gray',
    marginBottom:25
  },

})

export default Home