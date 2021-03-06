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
  Image
} from 'react-native';

import {
  BgView
} from '../components/BgView';

import Api from '../api';

const SERVER_URL = "http://localhost:5000/";

class Home2 extends Component {


  static navigationOptions = {
    title: 'home'
    //   header: null
  };

  constructor() {
    super();

    this.state = {

    }
  }




  render() {
    return (

      <BgView style={styles.container}>
        <View style={styles.profileBlock}>
          <View style={styles.profileLeft}>
            <Text style={styles.helloHeading}>
              Hello, John
            </Text>
            <Text style={styles.profileInfo}>
              27 - Male - London
            </Text>
            <Text style={styles.profileCopy}>
              What do you want to do today?
            </Text>
          </View>
          <View style={styles.profileRight}>
            <Image source={require('../img/profile.png')} style={styles.profileImage} resizeMode={Image.resizeMode.stretch} />
          </View>
        </View>

        <Text style={styles.heading}>
          Welcome to Kameo!
        </Text>

      </BgView>
    );
  }
}
//.bind(this)


const styles = StyleSheet.create({
  profileBlock : {
    flexDirection: 'row',
  },
  helloHeading:
  {
    color: '#fff',
    fontSize: 18
  },
  profileInfo:
  {
    color: '#fff'
  },
  profileCopy:
  {
    color: '#fff'
  },
  profileLeft : {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    //  backgroundColor: '#F5FCFF',
    padding: 0,
    paddingTop: 55,
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingRight:8,
    //width:'',
  },
  profileImage: {
    width: 100,
    height:100,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius:4,
    opacity:0.8
  },
  signOutLink: {

  },
  input: {
    height: 50,
    marginTop: 10,
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    borderRadius: 4,
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Avenir Next',
  },
  placeholder: {
    color: 'rgba(255,255,255,1)',
  },
  registerButton: {
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignSelf: 'stretch',
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,1)'
  },
  registerButtonText: {
    fontSize: 22,
    color: '#FFFFFF',
    alignSelf: 'center'
  },
  heading: {
    fontSize: 24,
    fontWeight: '200',
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFFFFF',
    marginBottom: 20,
    marginTop: 40
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default Home2
