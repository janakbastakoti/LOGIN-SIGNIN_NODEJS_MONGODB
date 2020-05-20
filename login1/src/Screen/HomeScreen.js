import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, ActivityIndicator  } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

export default class HomeScreen extends React.Component {
   state = {
    email: ""
  }


  static navigationOptions = {
    header: null
  };

 
  // componentDidMount() {
  //   this.unsuscribeAuth = firebase.auth().onAuthStateChanged(user=>{
  //                           if(user){
  //                             console.log("email user")
  //                             console.log(user.email)
  //                             this.setState({ email: user.email })
  //                             console.log("email user222")
  //                             console.log(this.state.email)
  //                           }else{
  //                              this.props.navigation.replace("LogIn")
  //                           }
  //                         })
  //                         console.log(this.state.email)
  // }

  userSignout() {
    console.log("pressed")
  }


  componentWillUnmount() {     
    this.unsuscribeAuth()
  }

  render() {
    return (
      <View style={styles.container}>
      <Text>This  is the Home screen </Text>
      <Text>you are log in as</Text>
      <TouchableOpacity style={styles.button} onPress={()=>this.userSignout()} >
        <Text style={styles.buttontext}>Sign Out</Text>
      </TouchableOpacity>
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
  button: {
    fontSize: 15,
    height: 30,
    color: '#1b0001',
    borderRadius:25,
    paddingHorizontal: 16,
    marginVertical:10,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign:'center',
  }
   
});