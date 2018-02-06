import { View, Image, StatusBar, TouchableWithoutFeedback, TouchableHighlight } from 'react-native';
import React, { Component } from 'react';
import { Actions, Router, Scene } from 'react-native-router-flux';
import { KmText } from 'Kameo/components';

class KmNavBar extends Component {
  render() {
    return (
      <View style={styles.backgroundStyle}>
        <StatusBar />
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={() => Actions.home()}>
            <Image source={require('Kameo/img/logo2.png')} style={styles.logo} resizeMode={Image.resizeMode.cover} />
          </TouchableWithoutFeedback>
          <TouchableHighlight onPress={() => Actions.drawerOpen()} style={styles.menuContainer}>
            <Image source={require('Kameo/img/menu2.png')} style={styles.menu} resizeMode={Image.resizeMode.stretch} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = {
  container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backgroundStyle: {
    backgroundColor: 'transparent',
    height: 50,
    borderWidth: 0,
    borderColor: 'red'
  },
  backarrowStyle: {
    resizeMode: 'contain',
    flexDirection: 'row',
    width: 50,
    height: 50,
    left: 0,
    justifyContent: 'flex-start'
  },
  helpStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    left: 220,
    justifyContent: 'flex-end',
    position: 'relative'
  },
  settingStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    justifyContent: 'flex-end',
    position: 'relative',
    left: 210
  },
  logo: {
    height: 23,
    width: 100,
    marginLeft: 15,
    marginTop: -4,
  },
  menuContainer: {
    marginRight: 15
  },
  menu: {
    width:30,
    height: 30,
    marginTop: 0
  }
};

export default KmNavBar;
