'use strict';

import React, { Component } from 'react';

import { StyleSheet, TextInput, TouchableHighlight, Text, View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Button } from 'native-base';

const goToRegister = () => {
  Actions.register();
};

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Sign in to Kameo</Text>
        <TextInput
          onChangeText={text => this.setState({ email: text })}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="rgba(255,255,255,0.3)"
        />
        <TextInput
          onChangeText={text => this.setState({ password: text })}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="rgba(255,255,255,0.3)"
        />

        <Button primary>
          <Text> Primary </Text>
        </Button>

        <TouchableHighlight
          style={styles.registerButton}
          underlayColor="rgba(255,255,255,0.3)"
          onPress={Actions.home}
        >
          <Text style={styles.registerButtonText}>Sign In</Text>
        </TouchableHighlight>
        <Text style={styles.registerLink} onPress={goToRegister}>
          Or Register
        </Text>
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
    padding: 40,
    paddingTop: 80,
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

export default Login;
