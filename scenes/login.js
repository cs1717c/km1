
'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import Api from '../api';

import {
  BgView
} from '../components/BgView';


const TOKEN_KEY = "token";
const SERVER_URL = "http://localhost:5000/";

class Login extends Component {
  static navigationOptions = {
    header: null,
    title: 'Home',
  }


  constructor() {
    super();

    this.state = {

    }
  }



  async storeToken(accessToken) {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, accessToken);
      this.getToken();
    }
    catch (error) {
      console.log(error);
    }
  }


  async getToken() {
    try {
      let token = await AsyncStorage.getItem(TOKEN_KEY);
      console.log("token is" + token);
    }
    catch (error) {
      console.log(error);
    }
  }

  async onRegisterPressed() {

  }

  async onLoginPressed() {
    const { navigate } = this.props.navigation;
    Api.signIn(this.state.email, this.state.password).then(() => navigate("SignedIn"));
  }

  render() {
    const { navigate } = this.props.navigation;


    return (
      <BgView style={styles.container}>
        <Text style={styles.heading}>
          Sign in to Kameo
      </Text>
        <TextInput
          onChangeText={(text) => this.setState({ email: text })}
          style={styles.input} placeholder="Email" placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TextInput
          onChangeText={(text) => this.setState({ password: text })}
          style={styles.input} placeholder="Password"
          secureTextEntry={true} placeholderTextColor='rgba(255,255,255,0.3)'>
        </TextInput>
        <TouchableHighlight onPress={this.onLoginPressed.bind(this)} style={styles.registerButton}
          underlayColor='rgba(255,255,255,0.3)'>
          <Text style={styles.registerButtonText}>
            Sign In
          </Text>
        </TouchableHighlight>
        <Text style={styles.registerLink} onPress={() =>
          navigate('Register')
        }>
          Or Register
      </Text>
      </BgView>
    );
  }
}
//.bind(this)


const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    margin: -1
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //  backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80,
    alignSelf: 'stretch',
    marginLeft: 10,
    marginRight: 10
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
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)'
  },
  registerLink: {
    fontSize: 18,
    fontWeight: '200',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop: 40
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
    marginTop: 40
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Login
