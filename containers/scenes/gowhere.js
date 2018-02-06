'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import areas from 'Kameo/utilities/areas';

class GoWhere extends Component {
  render() {

    const areaButtons = [];
    for (const area of areas) {
      areaButtons.push(<KmButton style={styles.areaBtn} key={area} isToggle>{area}</KmButton>);
    }

    return (
      <BgView style={styles.page}>

        <KmText style={styles.header}>3. where</KmText>

        <View style={[styles.section, styles.areasSection]}>
          <KmText style={styles.areasHeader}>Where do you want to go out?</KmText>
          <View style={styles.areasBody}>
            {areaButtons}
          </View>
        </View>

        <View style={[styles.section, styles.selectAllSection]}>
            <KmButton toggle style={styles.selectAllBtn}>select all</KmButton>
        </View>

        <View style={styles.footer}>
          <KmText>3/4</KmText>
          <KmButton style={styles.next} onPress={Actions.goWhen}>next</KmButton>
        </View>

      </BgView>
    );
  }
}

const styles = {
  page: { 
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex:1,
   // borderWidth: 1,
    borderColor: 'red',
     justifyContent: 'space-between'
  },

  header: {
    fontSize: 28,
    marginTop: 20
  },

  section: {
    marginTop: 0,
   // borderWidth: 1,
    borderColor: 'blue'
  },

  subHeader: {
    fontSize: 16,
    fontWeight: '400'
  },

  areasHeader: {
    fontSize: 18
  },

  areasBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: -5,
    marginTop: 10
  },

  selectAllSection: {
    marginTop: 20,
    width: 150
  },

  areaBtn: {
    width: 120,
    marginHorizontal: 3,
    marginTop: 18,
    paddingVertical: 7,
    paddingHorizontal: 1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 0
  },

  next: {
    paddingVertical: 8,
    paddingHorizontal: 40
  }

};

export default GoWhere;
