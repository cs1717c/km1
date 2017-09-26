'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { Heading, TextInput, Title, Button, Text } from '@shoutem/ui';

class Home extends Component {
  static navigationOptions = {
    title: 'home'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.profileBlock}>
          <View style={styles.profileLeft}>
            <Title
              onPress={() => {
                Actions.quest();
              }}
            >
              Hello, John
            </Title>
            <Text>27 - Male - London</Text>
            <Text>What do you want to do today?</Text>
          </View>
          <View style={styles.profileRight}>
            <Image
              source={require('../img/profile.png')}
              style={styles.profileImage}
              resizeMode={Image.resizeMode.stretch}
            />
          </View>
        </View>

        <View style={styles.mainBlock}>
          <View style={styles.mainBlockHeadingRow}>
            <View style={styles.mainBlockHeadingRowLeft}>
              <Title>Go Out</Title>
            </View>
            <View style={styles.mainBlockHeadingRowRight}>
              <Button styleName="full-width" style={styles.mainBtn}>
                <Text>Go Out</Text>
              </Button>
            </View>
          </View>
          <View style={styles.mainBlockSubRow}>
            <Text>Join over 2000 other Kameo users out in London today.</Text>
          </View>
        </View>

        <View style={styles.mainBlock}>
          <View style={styles.mainBlockHeadingRow}>
            <View style={styles.mainBlockHeadingRowLeft}>
              <Title>Meet Here</Title>
            </View>
            <View style={styles.mainBlockHeadingRowRight}>
              <Button styleName="full-width" style={styles.mainBtn}>
                <Text>Meet Here</Text>
              </Button>
            </View>
          </View>
          <View style={styles.mainBlockSubRow}>
            <Text>Invite other Kameo users to join you where you are.</Text>
          </View>
        </View>

        <View style={styles.mainBlock}>
          <View style={styles.mainBlockHeadingRow}>
            <View style={styles.mainBlockHeadingRowLeft}>
              <Title>Quest</Title>
            </View>
            <View style={styles.mainBlockHeadingRowRight}>
              <Button styleName="full-width" style={styles.mainBtn}>
                <Text>Quest</Text>
              </Button>
            </View>
          </View>
          <View style={styles.mainBlockSubRow}>
            <Text>The adventure starts here...</Text>
          </View>
        </View>

        <View style={styles.mainBlock}>
          <View style={styles.mainBlockHeadingRow}>
            <View style={styles.mainBlockHeadingRowLeft}>
              <Title>#what</Title>
            </View>
            <View style={styles.mainBlockHeadingRowRight}>
              <Button styleName="full-width" style={styles.mainBtn}>
                <Text>#what</Text>
              </Button>
            </View>
          </View>
          <View style={styles.mainBlockSubRow}>
            <Text>Let us know what you're into </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileBlock: {
    flexDirection: 'row',
    padding: 10,
    paddingTop: 0
  },
  helloHeading: {
    fontSize: 18
  },
  profileLeft: {
    flexGrow: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    //  backgroundColor: '#F5FCFF',
    padding: 0,
    paddingTop: 20,
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingRight: 8
    //width:'',
  },
  profileImage: {
    width: 110,
    height: 110,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    opacity: 0.8
  },
  mainBlock: {
    flexDirection: 'column',
    padding: 10,
    paddingTop: 30
  },
  mainBlockHeadingRow: {
    flexDirection: 'row',
    padding: 0
  },
  mainBlockHeadingRowLeft: {
    flexDirection: 'row',
    padding: 0,
    flexGrow: 1
  },
  mainBlockHeadingRowRight: {
    padding: 0,
    width: 110
  },
  mainBlockSubRow: {
    flexDirection: 'row',
    padding: 0,
    paddingTop: 20
  }
});

export default Home;
