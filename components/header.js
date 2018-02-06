'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import { connect } from 'react-redux';


import Icon from 'react-native-vector-icons/SimpleLineIcons';
const myIcon = (<Icon name="rocket" size={30} color="#900" />)



export class Header extends Component {

  render() {
    let toggle = () => {
      var wasOpen = this.props.menuOpen;
      this.props.dispatch({ type: 'MENU', isOpen: !wasOpen });

      if (!wasOpen) {
        this.props.navigation.navigate('DrawerOpen');
      }
      else {
        this.props.navigation.navigate('DrawerClose');
      }
    };

    return (<View style={{
      justifyContent: 'flex-start',
      flexDirection: 'row'
    }}>
      <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Avenir Next', fontWeight: '400', flexGrow: 1 }}>Kameo</Text>
      <Icon name='menu' size={22} color="#FFF" style={{ paddingRight: 5, paddingTop: 5 }} onPress={toggle.bind(this)} />
    </View>);
  }
};

let ImageHeader = React.createClass({
  render() {
    console.log('ImageHeader props', this.props);
    return (
      <View style={{ height: 40, justifyContent: 'flex-end', padding: 0, paddingTop: 25, paddingLeft: 5, backgroundColor: 'rgba(255,255,255,0.0)' }}>
        <StatusBar
          barStyle="light-content"
        />
        <Header {...this.props} style={{ backgroundColor: 'white' }} />
      </View>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    menuOpen: state.nav.menuOpen
  };
};

export default connect(
  mapStateToProps,
)(ImageHeader);