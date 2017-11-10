'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar, Text, TextInput, TouchableHighlight, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';

import { mainStyles } from 'Kameo/style.js';

const goToRegister = () => {
  Actions.register();
};

class Login extends Component {
  render() {
    return (
      <BgView isDark>      
        <View style={styles.container}>
          <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

          <Text style={styles.heading}>Sign in to Kameo</Text>

          <KmInput
            onChangeText={text => this.setState({ email: text })}
            placeholder="Email"
            placeholderTextColor="rgba(255,255,255,0.5)"
            autoCapitalize="none"
            style={styles.inputContainer}
          />

          <KmInput
            onChangeText={text => this.setState({ password: text })}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="rgba(255,255,255,0.5)"
          />

          <KmButton
            underlayColor="rgba(255,255,255,0.3)"
            onPress={Actions.home}
            style={styles.signInButton}
          >
Sign In
          </KmButton>

          <KmText style={styles.registerLink} onPress={goToRegister}>
            Register
          </KmText>

          <KmText style={styles.facebookLink} onPress={goToRegister}>
            Sign in with Facebook
          </KmText>

        </View>
        </BgView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
    flexDirection: 'column'
  },

  heading: {
    fontSize: 32,
    fontWeight: '300',
    marginBottom: 40,
    marginTop: 60,
    fontFamily: 'Avenir Next',        
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(255,255,255,1)'
  },
  
  inputContainer: {
    marginTop: 50,
    marginBottom: 20,
  },

  input: {
    fontSize: 18
  },

  signInButton: {
    marginTop: 30,
    width: '100%',
  },

  registerLink: {
    marginTop: 100,
  },

  facebookLink: {
    marginTop: 30,
  },
  // placeholder: {
  //   color: 'rgba(255,255,255,1)'
  // },
  // registerButton: {
  //   height: 50,
  //   backgroundColor: 'rgba(255,255,255,0.15)',
  //   alignSelf: 'stretch',
  //   marginTop: 30,
  //   justifyContent: 'center',
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: 'rgba(255,255,255,1)'
  // },
  // registerLink: {
  //   fontSize: 18,
  //   fontWeight: '200',
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   color: '#FFFFFF',
  //   marginBottom: 20,
  //   marginTop: 40
  // },

  // registerButtonText: {
  //   fontSize: 22,
  //   color: '#FFFFFF',
  //   alignSelf: 'center'
  // },

  // error: {
  //   color: 'red',
  //   paddingTop: 10
  // },
  // loader: {
  //   marginTop: 20
  // }
});

export default Login;
