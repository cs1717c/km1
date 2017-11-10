'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

import {BgView, KmText} from 'Kameo/components';



const {bp, vw, vh} = require('react-native-relative-units')(375);

class Home extends Component {
  render() {
    return (
      <BgView style={styles.container}>
        <View style={styles.profileContainer}>
        <Image source={require('Kameo/img/profiles/01.jpg')} style={styles.profile} />
        <View style={styles.profileInfo}>
        <KmText style={styles.profileHeader}>Hello, John</KmText>
        <KmText style={styles.profileSubHeader}>27 - Male - London</KmText>
        </View>
        </View>
        <View style={styles.linkContainer}>
          <TouchableWithoutFeedback onPress={Actions.goWho}>
            <KmText style={styles.link}>go out</KmText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Actions.meet}>
          <KmText style={styles.link}>meet here</KmText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Actions.enRoute}>
            <KmText style={styles.link}>quest</KmText>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Actions.what}>
            <KmText style={styles.link}>#what</KmText>
          </TouchableWithoutFeedback>
        </View>
      </BgView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  link: {
    fontSize: 36,
    textAlign: 'left',
    padding: 25,
  },
  profile: {
    width: 71,
    height: 70,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgba(0,0,0,1)'
  },
  profileInfo: {
    marginLeft: 20
  },
  profileHeader: {
    fontSize: 24
  },
  profileSubHeader: {
    marginTop: 10
  },
  profileLink: {
    fontSize: 40,
    marginLeft: 25,
  },
  profileContainer: {
    marginTop: 35,
    marginLeft: 35,
    marginRight: 20,
   flexDirection: 'row',
  //  borderWidth: 1,
  //  width: '100%',
  //  backgroundColor: 'rgba(255,200,255,0.1)',
   borderRadius: 8,
  // padding: 20,
  },
  linkContainer: {
    marginTop: 20,
    marginLeft: 45,
  }
};

export default Home;
