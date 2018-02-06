'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import times from 'Kameo/utilities/times';
import tags from 'Kameo/utilities/tags';


class GoFinal extends Component {
  render() {

    const tagText = [];
    for (const tag of tags.slice(0,7)) {
      tagText.push(<KmText style={styles.tag} key={tag}>#{tag}</KmText>);
    }

    return (
      <BgView style={styles.page}>

        <KmText style={styles.header}>drinks in chelsea</KmText>

        <TouchableWithoutFeedback onPress={Actions.goWho}>
          <View style={[styles.section, styles.whoSection]}>
            <KmText style={styles.sectionHeader}>who</KmText>
            <KmText style={styles.sectionCopy}>you and 20+ attending</KmText>
          </View>
        </TouchableWithoutFeedback>


        <TouchableWithoutFeedback onPress={Actions.goWhat}>
          <View style={[styles.section, styles.whatSection]}>
            <KmText style={styles.sectionHeader}>what</KmText>
            <View style={styles.tags}>
              {tagText}
              <KmText style={styles.tag}> ...and 40 more</KmText>
            </View>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Actions.goWhere}>
          <View style={[styles.section, styles.whereSection]}>
            <KmText style={styles.sectionHeader}>where</KmText>
            <KmText style={styles.sectionCopy}>Kensington Roof Gardens.</KmText>
            <KmText style={styles.sectionCopy}>20m walk, 10m drive, 15m public transport</KmText>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={Actions.goWhen}>
          <View style={[styles.section, styles.whatSection]}>
            <KmText style={styles.sectionHeader}>when</KmText>
            <KmText style={styles.sectionCopy}>early evening - late night. starting in 30 min</KmText>
          </View>
        </TouchableWithoutFeedback>

        <View style={[styles.section, styles.goSection]}>
            <KmText style={styles.goHeader}>want to go?</KmText><KmButton toggle style={styles.goBtn} onPress={Actions.enRoute}>go</KmButton>
        </View>

        <View style={styles.footer}>
        <KmButton toggle style={styles.moreBtn} onPress={Actions.enRoute}>more</KmButton><KmText style={styles.footerText}> ... or see another option</KmText>
        </View>

      </BgView>
    );
  }
}

const styles = {
  page: { 
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'space-between'
  },

  header: {
    fontSize: 26,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: '400'
  },

  section: {
    marginTop: 0,
    borderColor: 'blue',
  },

  sectionCopy: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)'
  },

  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },

  tag: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)'
    
  },

  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
  },

  subHeader: {
    fontSize: 18,
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

  goSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 20
  },

  footerText: {
    fontSize: 16
  },

  goHeader: {
    fontSize: 24,
    fontWeight: '400'
  },

  goBtn: {
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
    height: 40,
  },

  next: {
    paddingVertical: 8,
    paddingHorizontal: 40
  }

};

export default GoFinal;
