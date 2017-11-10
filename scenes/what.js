'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton } from 'Kameo/components';

import tags from 'Kameo/utilities/tags';

import LinearGradient from 'react-native-linear-gradient';


class What extends Component {
  render() {
    const tagRows = [];
    for (const tag of tags.slice(0,20)) {
      tagRows.push(
        <View key={tag} style={styles.tagRow}>
          <KmText style={styles.tag}>#{tag}</KmText>
          <KmText style={styles.subscriberCount}>100k</KmText>
        </View>);
    }

    return (
      <BgView style={styles.page}>
        <KmInput 
          style={styles.search}
          inputStyle={styles.searchInput}
          placeholder='#what are you into?'
          placeholderTextColor="rgba(255,255,255,1)"
          autoCapitalize="none"
        />
        

        <ScrollView style={styles.tagScroller}>
          {tagRows}
          <View style={styles.tagSpacer} />
        </ScrollView>
        <Image source={require('Kameo/img/gradient2.png')} style={styles.scrollGradient} pointerEvents={'none'} />
        <View style={styles.footer}>
        <KmButton style={styles.next}>only my choices</KmButton>
          <KmButton style={styles.next} onPress={Actions.goWhere}>done</KmButton>
        </View>

      </BgView>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 20,
    borderWidth: 1,
    borderColor: 'red'
  },

  scrollGradient: {

  },

  page: {
    padding: 0,
    paddingTop: 80
  },

  header: {
    marginBottom: 10,
    marginLeft: 10
  },

  search: {
    paddingLeft: 20,
    borderColor: 'rgba(0,0,0,1)',
    paddingBottom: 20,
  },

  searchInput: {
    fontSize: 24
  },

  tagScroller: {
    //  borderWidth: 1,
    borderColor: 'red',
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
    marginTop: 0,
    marginBottom: -120,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },

  scrollGradient: {

  },

  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  tagSpacer: {
    height: 90,
  },

  tag: {
    fontSize: 24,
    color: 'rgba(255,255,255,0.5)'
  },

  subscriberCount: {
    marginTop: 2, 
    color: 'rgba(255,255,255,0.75)'
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8
  }
};

export default What;
