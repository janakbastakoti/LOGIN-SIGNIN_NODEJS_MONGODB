import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput , KeyboardAvoidingView, Alert} from 'react-native';


export default class LogInScreen extends Component {
  static navigationOptions = {
    header: null   
  };
  state = {
    email: "",
    password: ""

  }

  userLogin = () => {
    console.log(this.state)
    fetch("http://192.168.100.214:3000/signup",{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
    },
     body: JSON.stringify({
      "email": this.state.email,
      "password": this.state.password
     })
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
    })
  }

  render() {
  return (
    <View  style={styles.container}>
      <View >
      <TextInput
        style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter Email '
        placeholderTextColor="#ffffff"
        keyboardType="email-address"
        value={this.state.email}        
        onChangeText= {(text)=>this.setState({email:text})}
        
        />
      <TextInput
        style={styles.inputbox} underlineColorAndroid='rgba(0,0,0,0)' placeholder='Enter password'
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
        secureTextEntry={true}
       value={this.state.password}        
        onChangeText= {(text)=>this.setState({password:text})}
        />   
     
      <TouchableOpacity style={styles.button} onPress={()=>this.userLogin(this.state.email,this.state.password)} >
        <Text style={styles.buttontext}>Log In</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.signupView}>
          <Text style={styles.signupText}>Already have an account. </Text>
          <TouchableOpacity  onPress={()=>this.props.navigation.navigate('SignUp')}>
            <Text style={styles.login}>Sign Up</Text>
          </TouchableOpacity>
      </View>

      

      
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#546e7a"
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
  login: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  },
  inputbox: {
    fontSize: 15,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal: 16,
    marginVertical:10,
  },
  buttontext: {
    fontSize:16,
    fontWeight:'500',
    color: '#ffffff',
    textAlign:'center',
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



// <View style={styles.signupView}>
//           <Text style={styles.signupText}>Already have an account. </Text>
//           <TouchableOpacity >
//             <Text style={styles.login}>SignUp</Text>
//           </TouchableOpacity>
//       </View>
