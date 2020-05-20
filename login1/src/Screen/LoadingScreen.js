import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, ActivityIndicator  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class LoadingScreen extends React.Component {



  static navigationOptions = {
    header: null
  };



  render() {
    return (
      <View style={styles.container}>
       <ActivityIndicator size="large" color="red" />   
       <Text>This is the loading page ......................</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#546e7a",
    alignItems: 'center',
    justifyContent: 'center',
  },
   
});