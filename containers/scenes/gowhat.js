'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import tags from 'Kameo/utilities/tags';

class GoWhat extends Component {
  render() {
    const tagText = [];
    for (const tag of tags.slice(0,10)) {
      tagText.push(<KmText style={styles.tag} key={tag}>#{tag}</KmText>);
    }

    return (
      <BgView style={styles.page}>

        <KmText style={styles.header}>2. #what</KmText>

        <KmText style={styles.subHeader}>#what are you into?</KmText>
        <View style={[styles.section, styles.tagSection]}>
          <View style={styles.tagBody}>
            {tagText}
          </View>
          <KmText style={[styles.tag, { marginLeft: 5 }]}>... and 25 more</KmText>
          <KmButton style={styles.changeBtn} onPress={Actions.what}>change</KmButton>
        </View>

        <View style={[styles.section, styles.changeSection]}>
        </View>

        <View style={styles.footer}>
          <KmText>2/4</KmText>
          <KmButton style={styles.next} onPress={Actions.goWhere}>next</KmButton>
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
    marginTop: 40
  },

  section: {
    marginTop: 0,
   // borderWidth: 1,
    borderColor: 'blue'
  },

  tagSection: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    margin: -10,
    padding: 10,
    borderRadius: 20,
    marginTop: 10,
  },

  subHeader: {
    fontSize: 20,
    fontWeight: '400',
    marginTop: 30,
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
  },

  tagBody: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 5,
  },

  tag: {
    paddingHorizontal: 7,
    paddingRight: 0,
    paddingVertical: 10,
    fontWeight: '400',
    fontSize: 16,
    color: 'rgba(255,255,255,01)'
  },

  changeBtn: {
    width: 110,
    alignSelf: 'flex-end',
    marginTop: -40,
  },

};

export default GoWhat;
