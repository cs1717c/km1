'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableOpacity, Switch } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import RNGooglePlaces from 'react-native-google-places';

class Meet extends Component {
  openSearchModal() {
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => {
		  console.log(place);
		  // place represents user's selection from the
		  // suggestions and it is a simplified Google Place object.
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  render() {
    return (
      <BgView style={styles.container}>
        <View style={styles.meetView}><Text style={styles.header}>meet here</Text><Switch /></View>
        <Text style={styles.small}>With meet here enabled, Kameo will invite compatible people to join you, right where you are now!</Text>
        <View style={styles.locationView}>
          <Text style={styles.subHeader}>current location</Text> 
          <KmButton textStyle={styles.changeBtn}  onPress={() => this.openSearchModal()}>select...</KmButton>
        </View>
      </BgView>
    );
  }
}

const styles = {
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    flex:1,
   // borderWidth: 1,
    borderColor: 'red',
  },
  small : {
    fontSize: 16,
    letterSpacing: 1.4,
    lineHeight: 30,
    color: 'rgba(255,255,255,0.7)',
    marginTop: 30,
    textAlign: 'justify',
  },
  link: {
    margin: 40,
  },
  header : {
    color: 'rgba(255,255,255,1)',
    fontSize: 32,
    fontWeight: '300',
  },
  subHeader : {
    fontSize: 24,
    color: 'rgba(255,255,255,1)',
  },
  locationView: {
    flexDirection: 'row',
    marginTop: 140,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  meetView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 120,
  },
  location: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 18,
  },
  changeBtn: {
    fontSize: 22,
  }
};

export default Meet;
