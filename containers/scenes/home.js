'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText } from 'Kameo/components';

import { connect } from 'react-redux';

const { bp, vw, vh } = require('react-native-relative-units')(375);

class Home extends Component {
  render() {
    console.log(this.props);

    return (
      <BgView style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={require('Kameo/img/profiles/00.jpg')} style={styles.profile} />
          <View style={styles.profileInfo}>
            <KmText style={styles.profileHeader}>Hello, {this.props.authentication.user.name}</KmText>
            <KmText style={styles.profileSubHeader}>27 - Male - London</KmText>
          </View>
        </View>
        <View style={styles.linksContainer}>

          <View style={styles.leftLinkContainer}>
            <TouchableHighlight onPress={Actions.what}>
              <View>
               <KmText style={styles.whatLink}>#what</KmText>
               <View style={styles.linkLine} />
              </View>
            </TouchableHighlight>
          </View>  

          <View style={styles.rightLinkContainer}>
            <TouchableHighlight onPress={Actions.meet}>
              <View>
                <KmText style={styles.meetHereLink}>meet here</KmText>
                <View style={styles.linkLine} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={Actions.goWho}>
              <View>
                <KmText style={styles.goLink}>go</KmText>
                <View style={styles.linkLine} />
              </View>
            </TouchableHighlight>
          </View>

        </View>
      </BgView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  link: {
    fontSize: 36,
    textAlign: 'left',
    padding: 25,
  },
  profile: {
    width: 71,
    height: 70,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: 'rgba(0,0,0,1)'
  },
  profileInfo: {
    marginLeft: 40
  },
  profileHeader: {
    fontSize: 24
  },
  profileSubHeader: {
    marginTop: 10
  },
  profileLink: {
    fontSize: 40,
    marginLeft: 25,
  },
  profileContainer: {
    marginTop: 55,
    marginLeft: 55,
    marginRight: 20,
   flexDirection: 'row',
  //  borderWidth: 1,
  //  width: '100%',
  //  backgroundColor: 'rgba(255,200,255,0.1)',
   borderRadius: 8,
  // padding: 20,
  },
  linksContainer: {
    marginTop: 20,
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 0,
    alignItems: 'flex-start',
  },
  leftLinkContainer: {
    marginTop: 120,
    width: 120,
    justifyContent: 'flex-end'
  },
  rightLinkContainer: {
    paddingTop: 200,
  },
  whatLink: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    textAlign: 'right',
    fontSize: 24,
  },
  linkLine: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,.33)'
  },
  goLink: {
    fontSize: 60,
    marginRight: 50,
    marginTop: 40,
  },
  meetHereLink: {
    fontSize: 24,    
  }
};

function mapStateToProps(store, ownProps) {
  return {
    ...store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // login: (email, password, name) => {
    //   dispatch(AuthenticationActions.login(email, password, name));
    // },
    // showErrorModal: (text) => {
    //   dispatch(ErrorActions.showErrorModal(text));
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
