'use strict';

//React
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';

//RNRF
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';

//Kameo
import { Login, Register, Home, Quest } from './scenes';

import DrawerContent from './components/DrawerContent';

import MenuIcon from './img/menu_burger2.png';

const getSceneStyle = () => ({
  backgroundColor: '#5C2BB7',
  shadowOpacity: 1,
  shadowRadius: 3
});

class App extends Component {
  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Stack key="root">
          <Scene
            key="login"
            component={Login}
            title="Sign In"
            navigationBarStyle={styles.navBar}
            navBarButtonColor="#fff"
          />
          <Scene key="register" component={Register} title="Register" />
          <Drawer
            hideNavBar
            key="drawer"
            contentComponent={DrawerContent}
            drawerPosition="right"
            navigationBarStyle={styles.navBar}
            navBarButtonColor="#fff"
            title="Kameo"
          >
            <Scene key="home" component={Home} title="Home" />
            <Scene key="quest" component={Quest} title="Quest" />
          </Drawer>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#814EE4'
  }
});

AppRegistry.registerComponent('Kameo', () => App);
