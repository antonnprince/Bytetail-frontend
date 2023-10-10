import { Text, View, StyleSheet,TouchableOpacity, Image, StatusBar, TextInput } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import{useState} from 'react';

const Search = ()=> {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <TouchableOpacity
       onPress={() => navigation.goBack()}
        style={styles.backButton}
     >
        <Image 
          source={require('../assets/back.png')}
          style={{
            marginTop:20,
            marginLeft:10,
            marginRight:-60
          }}
        />
     </TouchableOpacity>

      <View style={styles.inputContainer}>
          <TouchableOpacity>
            <Image 
            source={require('../assets/code.png')}
            style={{
                  left:290,
                  marginVertical:10,
                  color:'rgba(194, 194, 194, 0.25)'
            }}
            />
          </TouchableOpacity>

           <TouchableOpacity>
            <Image 
            source={require('../assets/Search.png')}
            style={{
                  right:-240,
                  marginVertical:10,
                  color:'rgba(194, 194, 194, 0.25)'
            }}
            />
          </TouchableOpacity>

          <TextInput 
              style={styles.bars}
              placeholder="Search"

              />
      </View>
      
      <TouchableOpacity>
        <Image 
        source={require('../assets/Cart.png')}
         resizeMode="cover"
        style={styles.cart}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    paddingTop: Constants.statusBarHeight,
    margin:7,
    padding: 8,
    top: StatusBar.currentHeight + 4,
    left:-15,
  },

  cart: {
    padding:0,
    left:10,
    right:10,
    height:20,
    width:25
  },

   inputContainer: {
    flexDirection: 'row',
    alignSelf:"stretch",    
    borderRadius: 10,
    flex:1,
  },

  backButton: {
    position: 'absolute',
    left: 10,
    zIndex: 1,
  },
   bars: {
    color:'gray',
    display:'flex',
    flexDirection:'row',
    backgroundColor:'rgba(194, 194, 194, 0.35)',
    fontWeight:'normal',
    padding:10,
    borderRadius:50,
    fontSize:18,
    flex:1,
    //left:-20,
    //width:"90%",
    //top:-10,
    //left:-10,
    borderColor:'rgba(140, 140, 140, 0.75)',
    borderWidth:1,
    //paddingVertical: 20
  },
});

export default Search;
