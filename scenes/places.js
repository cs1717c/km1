'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton } from 'Kameo/components';

import places from 'Kameo/utilities/places';

class Places extends Component {
  render() {
    const placeRows = [];
    for (const place of places.slice(0,20)) {
      const tags = "#"+place.tags.join(" #");

      const rating = place.rating;

      const stars = [];

      for (let i = 0; i < rating; i++) {
        stars.push(<Image source={require('Kameo/img/star-active2.png')} style={styles.placeStar} />);
      }

      for (let i = 0; i < 5-rating; i++) {
        stars.push(<Image source={require('Kameo/img/star2.png')} style={[styles.placeStar]} />);
      }

      placeRows.push(
        <View key={place.placeName} style={styles.placeRowContainer}>
          <View style={styles.placeTopRow}>
            <KmText style={styles.placeName}>{place.name}</KmText>
            <KmText style={styles.placeArea}>{place.area}</KmText>
          </View>
          <KmText style={styles.placeInfo}>({place.type[0]}) 20 min drive, 10 min walk</KmText>
          <View style={styles.placeStarsContainer}>{stars}</View>

          <View style={styles.placeBottomRow}>
            <KmText style={styles.placeTags}>{tags}</KmText>
            <KmButton style={styles.placeInfoButton}>...</KmButton>
          </View>
        </View>);
    }

    return (
      <BgView style={styles.page}>
        <KmInput 
          style={styles.search}
          inputStyle={styles.searchInput}
          placeholder='Search places'
          placeholderTextColor="rgba(255,255,255,1)"
          autoCapitalize="none"
        />
        

        <ScrollView style={styles.placeScroller}>
          {placeRows}
          <View style={styles.placeSpacer} />
        </ScrollView>
        <Image source={require('Kameo/img/gradient4.png')} style={styles.scrollGradient} pointerEvents={'none'} />
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

  placeScroller: {
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

  placeRowContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'rgba(255,200,255,0.1)',
    borderRadius: 8,
    padding: 12,
  },

  placeTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
    width: '100%'
  },

  placeBottomRow: { 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  placeTags: { 
  },  

  placeSpacer: {
    height: 90,
  },

  placeName: {
    textAlign: 'left',
    // alignSelf: 'flex-start',
    fontWeight: '500',
    fontSize: 18,
  },

  placeArea: {
    // alignSelf: 'flex-end',
    fontSize: 14,
  },

  placeInfo: {
    width: '100%',
    textAlign: 'left',
    fontSize: 14,
    marginTop: 5
  },

  placeStarsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%'
  },

  placeStar: {
    width: 16,
    height: 16,
    margin: 3,
  },

  placeTags: {
    fontSize: 13,
    width: '80%',
  },

  place: {
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

export default Places;
