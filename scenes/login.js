'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView } from '../components';

import { Heading, TextInput, Title, Button, Text } from '@shoutem/ui';

const goToRegister = () => {
  Actions.register();
};

class Login extends Component {
  render() {
    return (
      <BgView isHome>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

        <Heading styleName="md-gutter sign-in-header">Sign in to Kameo</Heading>

        <TextInput
          onChangeText={text => this.setState({ email: text })}
          styleName="md-gutter"
          placeholder="Email"
        />

        <TextInput
          onChangeText={text => this.setState({ password: text })}
          styleName="md-gutter"
          placeholder="Password"
          secureTextEntry
        />

        <Text>Don't have an account yet?</Text>
        <Text>Register</Text>
        
        <Button onPress={Actions.home} styleName="lg-gutter">
          <Text>Sign In</Text>
        </Button>

        <Text styleName="" onPress={goToRegister}>
          Or Register
        </Text>
      </BgView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 80,
    alignSelf: 'stretch'
  }
});

export default Login;
