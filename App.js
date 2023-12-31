import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Sign from './screens/SignUp';
import Home from './screens/Home';
import Login from './screens/Login';
import Main from './screens/Main';
import Cart from './screens/Cart';
import { useFonts } from 'expo-font';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import {Auth} from 'aws-amplify';


//Amplify.configure(awsconfig);

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};



export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Sign" component={Sign} />

        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Main" component={Main} />

        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
