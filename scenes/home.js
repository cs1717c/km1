'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Heading, TextInput, Title, Button, Text } from '@shoutem/ui';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.link}>go out</Text>
        <Text style={styles.link}>meet here</Text>
        <Text style={styles.link}>quest</Text>
        <Text style={styles.link}>#what</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 0,
    paddingTop: 20,
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingRight: 8
  },
  link: {
    padding: 0,
  }
};

export default Home;
