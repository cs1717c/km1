'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

class Settings extends Component {
  render() {
    return (
      <BgView>
        <KmButton toggle style={styles.signOutBtn} onPress={Actions.login}>Sign Out</KmButton>
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
  },

  signOutBtn: {
    margin: 50,
    marginTop: 50,
  }
};

export default Settings;
