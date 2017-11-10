'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText } from 'Kameo/components';

class Meet extends Component {
  render() {
    return (
      <BgView>
        <KmText>Meet</KmText>
      </BgView>
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
    margin: 30,
  }
};

export default Meet;
