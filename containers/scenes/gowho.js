'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

class GoWho extends Component {
  render() {
    return (
      <BgView style={styles.page}>

        <KmText style={styles.header}>1. who</KmText>

        <View style={styles.section}>
          <KmText style={styles.subHeader}>who are you with now?</KmText>
          <View style={styles.sectionBody}>
            <KmButton toggle style={styles.sectionBodyBtn}>by myself</KmButton>
            <KmButton toggle style={styles.sectionBodyBtn}>with friends</KmButton>
          </View>
        </View>

        <View style={styles.section}>
          <KmText>who do you want to meet?</KmText>
          <View style={styles.sectionBody}>
            <KmButton toggle style={styles.sectionBodyBtn}>my circle</KmButton>
            <KmButton toggle style={styles.sectionBodyBtn}>new people</KmButton>
          </View>
        </View>

        <View style={styles.footer}>
          <KmText>1/4</KmText>
          <KmButton style={styles.next} onPress={Actions.goWhat}>next</KmButton>
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
    fontSize: 30,
    marginTop: 40
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

  sectionBody: {
    flexDirection: 'row',
    marginTop: 10,
    borderColor: 'green',
  //  borderWidth: 1,
    justifyContent: 'space-between',
    width: '100%'
  },

  sectionBodyBtn: {
    width: '46%',
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 80,
    paddingBottom: 16,
  },

  next: {
    paddingVertical: 8,
    paddingHorizontal: 40
  }

};

export default GoWho;
