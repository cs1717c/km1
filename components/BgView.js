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
      <Image source={require('Kameo/img/home_bg.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.cover}>
      {this.props.children}
      </Image>);
    } else {
      return  (
      <Image source={require('Kameo/img/main_bg.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.stretch}>
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
    marginTop: -60,
    paddingTop: 65,
    backgroundColor: '#1d1a28'
  },
});

export default BgView;
