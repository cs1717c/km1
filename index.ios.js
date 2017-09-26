'use strict';

//React
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar } from 'react-native';

//RNRF
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';

import { BgView } from './components';

//Kameo
import {
  Login,
  Register,
  Home,
  Quest,
  Connect,
  What,
  Places,
  Settings,
  Help,
  GoWho,
  GoWhat,
  GoWhere,
  GoWhen,
  GoFinal
} from './scenes';

import DrawerContent from './components/DrawerContent';

const getSceneStyle = () => ({
   backgroundColor: 'rgba(0,0,0,0.1)',
  shadowOpacity: 1,
  shadowRadius: 3
});

class App extends Component {
  render() {
    return (
      <Router getSceneStyle={getSceneStyle}>
        <Stack key="root">
          <Scene key="login" component={Login} title="Sign In" hideNavBar="true" />
          <Scene key="register" component={Register} title="Register" />
          <Drawer
            hideNavBar
            key="drawer"
            contentComponent={DrawerContent}
            drawerPosition="right"
            navigationBarStyle={styles.navBar}
            title="Kameo"
          >
            <Scene key="home" component={Home} title="Home" />
            <Scene key="quest" component={Quest} title="Quest" />
            <Scene key="connect" component={Connect} title="Connect" />
            <Scene key="places" component={Places} title="Places" />
            <Scene key="settings" component={Settings} title="Settings" />
            <Scene key="help" component={Settings} title="Help" />
            <Scene key="what" component={What} title="#what" />
            <Stack key="go">
              <Scene key="goWho" component={GoWho} title="GoWho" />
              <Scene key="goWhat" component={GoWho} title="GoWhat" />
              <Scene key="goWhere" component={GoWho} title="GoWhere" />
              <Scene key="goWhen" component={GoWho} title="GoWhen" />
              <Scene key="goFinal" component={GoFinal} title="GoFinal" />
            </Stack>
          </Drawer>
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    shadowOpacity: 0
  }
});

const theme = {
  'com.example.AvatarItem': {
    // overrides AvatarItem component style...
  }
};

AppRegistry.registerComponent('Kameo', () => App);
