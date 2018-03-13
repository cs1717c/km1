'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton, KmModal } from 'Kameo/components';

// import places from 'Kameo/utilities/places';

import { connect } from 'react-redux';

import RNGooglePlaces from 'react-native-google-places';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { PlacesActions } from 'Kameo/actions';

import Modal from "react-native-modal";

import { filter } from 'lodash';

class Places extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isModalVisible: false,
      selectedPlace: {
        name: '',
      }
    };
  }

  handleSearchInput = (text) => {
    console.log('input');
    this.setState({query: text});
  }

  handleOnAddPlace = () => {
    console.log('adding place');
    console.log(this.props);

    const { addPlace } = this.props;
    
    RNGooglePlaces.openPlacePickerModal()
    .then((place) => {
      console.log('got place');
      console.log(place);
      console.log(addPlace);
      
      console.log('firing add place');
      addPlace({ placeid: place.placeID });
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  onSwipeLeft(gestureState, place) {
    this.setState({selectedPlace: place});
    this.toggleModal();
  }

  toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  hideModal = () =>
    this.setState({ isModalVisible: false });
  
  removeSelectedPlace = () => {
    const { removePlace } = this.props;
    removePlace(this.state.selectedPlace);
    this.setState({ isModalVisible: false });
  }
  
  render() {
    const gestureConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    const places = this.props.places.places;
    console.log('render places');
    
    const placeRows = [];

    console.log(this.state.query);

    const placeResults = filter(places, (item) => {
      return this.state.query.length === 0 || item.name.toLowerCase().indexOf(this.state.query.toLowerCase()) >= 0;
    });

    for (const place of placeResults.slice(0,20)) {
      // const tags = "#"+place.tags.join(" #");

      const rating = place.rating;

      const stars = [];

      for (let i = 0; i < rating; i++) {
        stars.push(<Image source={require('Kameo/img/star-active2.png')} style={styles.placeStar} key={`active-${i}`} />);
      }

      for (let i = 0; i < 5-rating; i++) {
        stars.push(<Image source={require('Kameo/img/star2.png')} style={[styles.placeStar]} key={`inactive-${i}`} />);
      }

      placeRows.push(
        <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state, place)}
        config={gestureConfig}
        key={place.name}
        >
        <View key={place.name} style={styles.placeRowContainer}>
          <View style={styles.placeTopRow}>
            <KmText style={styles.placeName}>{place.name}</KmText>
            {/* <KmText style={styles.placeArea}>{place.address}</KmText> */}
          </View>
          <KmText style={styles.placeInfo}>{place.address}</KmText>
          {/* <KmText style={styles.placeInfo}>({place.type[0]}) 20 min drive, 10 min walk</KmText> */}
          <View style={styles.placeStarsContainer}>{stars}</View>

          <View style={styles.placeBottomRow}>
            {/* <KmText style={styles.placeTags}>{tags}</KmText> */}
            {/* <KmButton style={styles.placeInfoButton}>...</KmButton> */}
          </View>
        </View>
        </GestureRecognizer>);
    }

    return [
      <KmModal
        isVisible={this.state.isModalVisible}
        onModalHide={() => this.hideModal()}
      >
            <Text style={styles.modalText}>Are you sure you want to delete {this.state.selectedPlace.name}?</Text>
            <View style={styles.modalButtonRow}>
              <KmButton style={styles.modalButton} onPress={() => this.removeSelectedPlace()}>Delete</KmButton> 
              <KmButton style={styles.modalButton} onPress={() => this.hideModal()}>Cancel</KmButton>
            </View>
        </KmModal>,
      <BgView style={styles.page}>
        <KmInput 
          style={styles.search}
          inputStyle={styles.searchInput}
          placeholder='Search places'
          placeholderTextColor="rgba(255,255,255,1)"
          autoCapitalize="none"
          onChangeText={this.handleSearchInput}
        />
        <ScrollView style={styles.placeScroller}>
          {placeRows}
          <View style={styles.placeSpacer} />
        </ScrollView>
        <View style={styles.footer}>
        <KmButton style={styles.next} onPress={this.handleOnAddPlace}>add place</KmButton>
          <KmButton style={styles.next} onPress={Actions.home}>done</KmButton>
        </View>

      </BgView>
    ];
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

  modalText: {
    color: 'white',
  },

  modalButtonRow: {
    flexDirection: 'row',
    marginTop: 30,
  },

  modalButton: {
    margin: 20,
  },

  scrollGradient: {

  },

  page: {
    padding: 0,
    paddingTop: 50,
  },

  header: {
    marginBottom: 0,
    marginLeft: 10
  },

  search: {
    paddingLeft: 20,
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(150,255,200,0.2)',
    paddingBottom: 30,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',

    height: 45,
    marginTop: 5,
  },

  searchInput: {
    fontSize: 20,
    height: 45,
    // borderWidth: 2,
  },

  placeScroller: {
    //  borderWidth: 1,
    borderColor: 'red',
    marginLeft: 0,
    marginRight: 0,
    padding: 10,
    marginTop: 0,
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
    fontSize: 14,
  },

  placeArea: {
    // alignSelf: 'flex-end',
    fontSize: 12,
  },

  placeInfo: {
    width: '100%',
    textAlign: 'left',
    fontSize: 12,
    marginTop: 5
  },

  placeStarsContainer: {
    flexDirection: 'row',
    marginTop: 5,
    width: '100%'
  },

  placeStar: {
    width: 12,
    height: 12,
    margin: 3,
    marginTop: 8,
  },

  placeTags: {
    fontSize: 11,
    width: '100%',
    marginTop: 10,
  },

  place: {
    fontSize: 21,
    color: 'rgba(255,255,255,0.5)'
  },

  subscriberCount: {
    marginTop: 2, 
    color: 'rgba(255,255,255,0.75)'
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


// export default What;

function mapStateToProps(store, ownProps) {
  return {
    ...store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPlace: (place) => {
      dispatch(PlacesActions.addPlace(place));
    },
    removePlace: (place) => {
      dispatch(PlacesActions.removePlace(place));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
