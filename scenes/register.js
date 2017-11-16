'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar, Text, TextInput, TouchableHighlight, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';


import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';


class Register extends Component {
  render() {
    return (
      <BgView isDark>      
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

        <Text style={styles.heading}>Sign Up</Text>

        <KmInput
          onChangeText={text => this.setState({ email: text })}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.5)"
          autoCapitalize="none"
          style={styles.inputContainer}
        />

        <KmInput
          onChangeText={text => this.setState({ email: text })}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.5)"
          style={styles.inputContainer}
        />

        <KmInput
          onChangeText={text => this.setState({ password: text })}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.5)"
          style={styles.inputContainer}
        />

        <KmInput
          onChangeText={text => this.setState({ password: text })}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.5)"
          style={styles.inputContainer}
        />

        <KmButton
          underlayColor="rgba(255,255,255,0.3)"
          onPress={Actions.home}
          style={styles.signInButton}
        >
Sign Up
        </KmButton>

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
    marginBottom: 60,
    marginTop: 30,
    fontFamily: 'Avenir Next',        
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(255,255,255,1)'
  },
  
  inputContainer: {
    marginTop: 10,
    marginBottom: 20,
  },

  input: {
    fontSize: 18
  },

  signInButton: {
    width: '80%',
    margin: 30,
    marginTop: 80,
  },

  registerLink: {
    marginTop: 100,
  },

  facebookLink: {
    marginTop: 30,
  },
});

export default Register;
