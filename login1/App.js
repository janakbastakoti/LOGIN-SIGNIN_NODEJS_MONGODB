import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator  } from "react-native";
import SignUpScreen from './src/Screen/SignUp';
import LogInScreen from './src/Screen/LogIn';
import LoadingScreen from './src/Screen/LoadingScreen';
import HomeScreen from './src/Screen/HomeScreen';
import { createStackNavigator, createAppContainer } from "react-navigation";



const AppNavigator = createStackNavigator({
  LogIn: LogInScreen ,
  SignUp: SignUpScreen,
  Loading: LoadingScreen,
  Home: HomeScreen
  
},
{
  initialRouteName: 'LogIn',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    headerStyle: {
    backgroundColor: '#546e7a',

    },
    headerTintColor: '#fff',
    headerTitleStyle: {
    fontWeight: 'bold',
    },
  },
}
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#546e7a",
    alignItems: 'center',
    justifyContent: 'center',
  },
   login: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  signupView: {
    justifyContent: "flex-end",
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 15,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(255,255,255,0.7)",
    fontSize: 16
  },
});
