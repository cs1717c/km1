'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Heading, TextInput, Title, Button, Text } from '@shoutem/ui';

const goToRegister = () => {
  Actions.register();
};

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

        <Heading styleName="md-gutter">Welcome to Kameo</Heading>
        <Title styleName="md-gutter">Sign In</Title>

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

        <Button onPress={Actions.home} styleName="lg-gutter">
          <Text>Sign In</Text>
        </Button>

        <Text styleName="" onPress={goToRegister}>
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
    padding: 20,
    paddingTop: 80,
    alignSelf: 'stretch'
  }
});

export default Login;
