'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton } from 'Kameo/components';

import Accordion from 'react-native-collapsible/Accordion';

// import Icon from 'react-native-vector-icons/FontAwesome';
// const myIcon = (<Icon name="rocket" size={30} color="#900" />)

class GoRequest extends Component {
  _renderHeader(section) {
    return (
      <View style={styles.sectionHeader}>
        <View style={styles.sectionHeaderTextWrapper}>
          <KmText style={styles.sectionHeaderText}>{section.title}</KmText>
        </View>
        <View style={styles.sectionShortContentWrapper}>
          <KmText style={styles.sectionShortContentText}>{section.shortContent}</KmText>
        </View>
      </View>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.sectionLongContent}>
        <KmButton>Change</KmButton> 
      </View>
    );
  }

  _getSections() {
    return [
      {
        title: 'who',
        shortContent: 'Just me - meeting new people'
      },
      {
        title: '#what',
        shortContent: 'My tags'
      },
      {
        title: 'where',
        shortContent: 'Within 5km'
      },
      {
        title: 'when',
        shortContent: 'Now'
      }
    ];
  }

  render() {
    return (
      <BgView style={styles.page}>
        <View style={styles.accordionStyle}>
          <Accordion
            sections={this._getSections()}
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
          />
        </View>
        <View style={styles.goNextWrapper}>
          <TouchableHighlight>
            <Text style={styles.goNextText}>
             {/* <myIcon /> */}
            </Text>
          </TouchableHighlight>
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

  headerText: {
    fontSize: 26,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: '400',
    color: 'white',
  },

  accordionStyle: {
    marginTop: 40,
  },

  section: {
    marginTop: 0,
    borderColor: 'blue',
  },

  sectionCopy: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.7)'
  },

  sectionLongContent: {
    marginLeft: 60,
    marginTop: 10,
    width: 100,
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
    marginTop: 20,

  },

  sectionHeaderTextWrapper: {
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255,255,255,0.33)',
    width: 115,
    marginLeft: -20,
    paddingLeft: 20,
  },

  sectionHeaderText: {
    fontSize: 21,
    // fontWeight: '600',
    color: 'white',
    textAlign: 'right',
  },

  sectionShortContentText: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginLeft: 60,
    marginTop: 20,
  },

  subHeader: {
    fontSize: 18,
    fontWeight: '400'
  },

  areasHeader: {
    fontSize: 20
  },

  goNextWrapper: {
    
  },

  goNextText: {
    color: 'white',
    fontSize: 72,
    fontWeight: '100',
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
    paddingBottom: 16,
  },

  next: {
    paddingVertical: 8,
    paddingHorizontal: 40
  }

};

export default GoRequest;
