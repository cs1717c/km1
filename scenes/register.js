'use strict';

import React, { Component } from 'react';

import { StyleSheet, View } from 'react-native';

import { Heading, TextInput, Title, Button, Text } from '@shoutem/ui';

class Register extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>Join us now!</Title>
        <TextInput placeholder="Email" />
        <TextInput placeholder="Name" />
        <TextInput placeholder="Password" secureTextEntry />
        <TextInput placeholder="Confirm Password" secureTextEntry />
        <Button>
          <Text>Register</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    paddingTop: 40,
    alignSelf: 'stretch'
  }
});

export default Register;
