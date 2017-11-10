'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import times from 'Kameo/utilities/times';

class GoWhen extends Component {
  render() {

    const timeButtons = [];
    for (const time of times) {
      timeButtons.push(<KmButton style={styles.areaBtn} key={time} isToggle>{time}</KmButton>);
    }

    return (
      <BgView style={styles.page}>

        <KmText style={styles.header}>4. when</KmText>

        <View style={[styles.section, styles.areasSection]}>
          <KmText style={styles.areasHeader}>When do you want to go out?</KmText>
          <View style={styles.areasBody}>
            {timeButtons}
          </View>
        </View>

        <View style={[styles.section, styles.selectAllSection]}>
            <KmButton toggle style={styles.selectAllBtn}>any time</KmButton>
        </View>

        <View style={styles.footer}>
          <KmText>4/4</KmText>
          <KmButton style={styles.next} onPress={Actions.goFinal}>next</KmButton>
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
    fontSize: 36,
    marginTop: 50
  },

  section: {
    marginTop: 0,
   // borderWidth: 1,
    borderColor: 'blue'
  },

  subHeader: {
    fontSize: 20,
    fontWeight: '400'
  },

  areasHeader: {
    fontSize: 20
  },

  areasBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginLeft: -5,
    marginTop: 10
  },

  selectAllSection: {
    marginTop: 0,
    width: 120
  },

  areaBtn: {
    width: 90,
    marginHorizontal: 5,
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 1,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80
  },

  next: {
    paddingVertical: 8,
    paddingHorizontal: 40
  }

};

export default GoWhen;
