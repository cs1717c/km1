'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  View
} from 'react-native';


class BgView extends Component {
  render() {
    const { isDark, isMenu } = this.props;

    if (isDark) {
      return (
      <Image source={require('Kameo/img/bg5.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.cover}>
      {this.props.children}
      </Image>);
    } else {
      return  (
      <Image source={require('Kameo/img/bg5.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.stretch}>
      {this.props.children}
      </Image>); 
    }
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    margin: 0,
    marginTop: -50,
    paddingTop: 50,
    backgroundColor: '#1d1a28',
  },
});

export default BgView;
