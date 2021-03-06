'use strict';

import React, { Component } from 'react';

import  {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  AsyncStorage,
  ActivityIndicatorIOS,
  Text,
  View
} from 'react-native';
 
import {
  BgView
} from'../components/BgView';

import Api from '../api';

class What extends Component {


  static navigationOptions = {
    title: '#what'
 //   header: null
  
  };
  
  constructor(){
    super();

    this.state = {
  
    }
  }




  render() {
    const { navigate } = this.props.navigation;      
    
    return (

      <BgView style={styles.container}>
        <Text style={styles.heading}>
          #what
        </Text>
      </BgView>
    );
  }
}
//.bind(this)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80,
    alignSelf: 'stretch',
    marginLeft:30,
    marginRight:30
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
    borderRadius:4,
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
    marginTop:40
  },
  error: {
    color: 'red',
    paddingTop: 10
  },
  loader: {
    marginTop: 20
  }
});

export default What
