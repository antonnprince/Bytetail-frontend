import * as React from 'react';
import {Text,View,TouchableOpacity} from "react-native";
import Constants from 'expo-constants';
import {useNavigation} from "@react-navigation/native";
//import { Actions } from 'react-native-router-flux';

const Foryou =()=>{

  const gotoFashion =()=>{
    Actions.fashion()
  }

<View>

  <Text>
    Tailored For you
  </Text>

</View>


}

export default Foryou