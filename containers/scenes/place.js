'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton } from 'Kameo/components';

import places from 'Kameo/utilities/places';

import RNGooglePlaces from 'react-native-google-places';

class Place extends Component {
  render() {
    return (
      <BgView style={styles.page}>
        <Text>View Place</Text>

        <View style={styles.footer}>
        <KmButton style={styles.next} onPress={this.handleOnAddPlace}>add place</KmButton>
          <KmButton style={styles.next} onPress={Actions.goWhere}>done</KmButton>
        </View>

      </BgView>
    );
  }
}

const styles = {

  page: {
    padding: 0,
    paddingTop: 50,
  },

  header: {
    marginBottom: 0,
    marginLeft: 10
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)'
  }
};

export default Place;
