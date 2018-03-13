'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Image,
  ImageBackground,
  View
} from 'react-native';


class BgView extends Component {
  render() {
    const { isDark, isMenu } = this.props;

    if (isDark) {
      return (
      <ImageBackground source={require('Kameo/img/bg5.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.cover}>
      {this.props.children}
      </ImageBackground>);
    } else {
      return  (
      <ImageBackground source={require('Kameo/img/bg5.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.stretch}>
      {this.props.children}
      </ImageBackground>); 
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
