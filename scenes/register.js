
'use strict';

import React, { Component } from 'react';

import  {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View
} from 'react-native';


import {
  BgView
} from'../components/BgView';



 const SERVER_URL = "http://localhost:5000/";

class Register extends Component {
  static navigationOptions = {
    header : null, 
    title: 'Home',
    gesturesEnabled : true
  }

  constructor(){
    super();

    this.state = {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      errors: [],
      showProgress: false,
    }
  }

  async onRegisterPressed()
  {
    try {
      let response = await fetch(SERVER_URL+'api/users', {
                              method: 'POST',
                              headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({
                            //    user:{
                                  name: this.state.name,
                                  email: this.state.email,
                                  password: this.state.password,
                                  password_confirmation: this.state.password_confirmation,
                            //    }
                              })
                            });
      let res = await response.text();
      if (response.status >= 200 && response.status <= 300)
      {
        console.log("res success is"+res);
      }
      else {
        let errors = res;
        throw errors;
      }
      console.log("registered");
      console.log(res);
    } catch (e) {
      console.log(e)
    } finally {

    }
    console.log(this);
  }

  render() {
    return (
      <BgView style={styles.container}>
      <Text style={styles.heading}>
        Join us now!
      </Text>
        <TextInput
          onChangeText={ (text)=> this.setState({email: text}) }
          style={styles.input} placeholder="Email" placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({name: text}) }
          style={styles.input} placeholder="Name"  placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password: text}) }
          style={styles.input} placeholder="Password"
          secureTextEntry={true}  placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TextInput
          onChangeText={ (text)=> this.setState({password_confirmation: text}) }
          style={styles.input} placeholder="Confirm Password"
          secureTextEntry={true}  placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TouchableHighlight onPress={this.onRegisterPressed.bind(this)} style={styles.registerButton}
          underlayColor='rgba(255,255,255,0.3)'>
          <Text style={styles.registerButtonText}>
            Register
          </Text>
        </TouchableHighlight>
      </BgView>
    );
  }
}
//.bind(this)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 40,
    alignSelf: 'stretch',
    marginLeft:10,
    marginRight:10
  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 4,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Avenir Next',
  },
  placeholder: {
    color: 'rgba(255,255,255,1)',
  },
  registerButton: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf: 'stretch',
    marginTop: 30,
    justifyContent: 'center',
    borderRadius:4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)'
  },
  registerButtonText: {
    fontSize: 22,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '200',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop:40
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Register
