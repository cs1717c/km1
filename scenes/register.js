'use strict';

import React, { Component } from 'react';

import { StyleSheet, TextInput, TouchableHighlight, Text, View } from 'react-native';

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Join us now!</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
        <TouchableHighlight style={styles.registerButton} underlayColor="rgba(255,255,255,0.3)">
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#5C2BB7',
    padding: 10,
    paddingTop: 40,
    alignSelf: 'stretch'
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
    fontFamily: 'Avenir Next'
  },
  placeholder: {
    color: 'rgba(255,255,255,1)'
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

export default Register;
