'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmButton, KmInput, KmScrollView } from 'Kameo/components';

import messages from 'Kameo/utilities/messages';

class EnRoute extends Component {

  render() {
    const messageRows = [];

    const images = {
      '01' : require('../img/profiles/01.jpg'),
      '02' : require('../img/profiles/02.jpg'),
      '03' : require('../img/profiles/03.jpg'),
      '04' : require('../img/profiles/04.jpg'),
      '05' : require('../img/profiles/05.jpg'),
      '06' : require('../img/profiles/06.jpg'),
      '07' : require('../img/profiles/07.jpg'),
      '08' : require('../img/profiles/08.jpg'),
    }


    for (const message of messages) {
      let imageName = 'Kameo/img/profiles/' + message.fromUserId +'.jpg'


      messageRows.push(
        <View key={message.fromUserId} style={styles.messageContainer}>
          <Image style={styles.messagePhoto} source={images[message.fromUserId]} />
          <View style={styles.messageBodyContainer}>
            <View style={styles.messageBodyHeader}>
              <KmText style={styles.messageAuthor}>{ message.fromUserName }</KmText>
              <KmText style={styles.messageTime}>{ message.time }</KmText>
            </View>
            <KmText style={styles.messageBody}>{ message.message }</KmText>
          </View>
        </View>);
    }

    return (
      <BgView style={styles.page}>
         <View style={styles.headerContainer}>
          <KmText style={styles.header}>En route to drinks in old street at...</KmText>
          <KmText style={styles.placeInfo}>The London Apprentice</KmText>
        </View>
        <View style={styles.buttonContainer}>    
          <KmButton style={styles.infoButton}>details</KmButton>
          <KmButton style={styles.mapButton}>directions</KmButton>
          <KmButton style={styles.checkInButton}>i'm here</KmButton>
        </View>
          <KmScrollView ref="scrollView" style={styles.chatLog} scrollStyle={styles.chatLogScroll} inverted>
          { messageRows }
        </KmScrollView> 
          <View style={styles.chatFieldContainer}>
          <KmInput 
            style={styles.chat}
            inputStyle={styles.chatInput}
            placeholder='chat'
            placeholderTextColor="rgba(255,255,255,1)"
            autoCapitalize="none"
          />
        </View>
      </BgView>
    );
  }
}

const styles = {
  page: { 
   
  },

  headerContainer: {
    justifyContent: 'space-between',    
    padding: 15,
    paddingBottom: 10,  
    width: '100%',
  },

  header: {
    fontSize: 16,
    fontWeight: '400',  
    flexShrink: 1,
    lineHeight: 20,
    paddingVertical: 4
  },

  placeInfo: {
    fontSize: 24,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingTop: 0,
    zIndex: 150,
  },

  checkInText: {
    fontSize: 18,
    fontWeight: '400',
    flexShrink: 1,
    lineHeight: 20,
    paddingVertical: 4
  },

  chatLog: {
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    flexShrink: 1,
    marginTop: -30,
 
  },

  chatLogScroll: {
    padding: 20,
    // borderWidth: 4,
    borderColor: 'red',
  },

  messagePhoto: {
    width: 60,
    height: 60,
    // borderWidth: 2,
    borderRadius: 8,
    marginRight: 15
  },
  
  messageBodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  messageBodyContainer: {
    flexGrow: 1,
  },

  messageBody: {
      flexShrink: 1,
      width: 260,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 16,
  },

  messageAuthor: {

  },

  messageTime: {
    fontSize: 14
  },
  
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },

  chat: {
    height: 62,
    marginBottom: -1,
  },

  chatInput: {
    fontSize: 24,
    // borderWidth: 1,
    marginLeft: 20,
    borderBottomWidth:  3
  },
};

export default EnRoute;
