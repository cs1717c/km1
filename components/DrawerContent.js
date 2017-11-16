import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { BgView } from 'Kameo/components';


class DrawerContent extends React.Component {
  render() {
    return (
      <Image source={require('Kameo/img/home_bg.png')} style={[styles.backgroundImage, this.props.style]} resizeMode={Image.resizeMode.cover}>
       <TouchableHighlight onPress={Actions.home} style={styles.menuItem}>
          <Text style={styles.menuText}>home</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.what} style={styles.menuItem}>
          <Text style={styles.menuText}>#what</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.go} style={styles.menuItem}>
          <Text style={styles.menuText}>go</Text>
        </TouchableHighlight>
        {/* <TouchableHighlight onPress={Actions.quest} style={styles.menuItem}>
          <Text style={styles.menuText}>quest</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.connect} style={styles.menuItem}>
          <Text style={styles.menuText}>connect</Text>
        </TouchableHighlight> */}
        <TouchableHighlight onPress={Actions.places} style={styles.menuItem}>
          <Text style={styles.menuText}>places</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.settings} style={styles.menuItem}>
          <Text style={styles.menuText}>settings</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={Actions.help} style={styles.menuItem}>
          <Text style={styles.menuText}>help</Text>
        </TouchableHighlight>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  menuItem : {
    padding :20,
    paddingVertical: 30
  },
  menuText:  {
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Avenir Next',
    fontSize: 28,
    textAlign: 'right'
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    margin: 0,
    marginTop: -60,
    paddingTop: 60,
    overflow: 'hidden',
    backgroundColor: '#1d1a28'
  },
});

export default DrawerContent;
