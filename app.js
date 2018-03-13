'use strict';

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, StatusBar, Modal, Text, Platform, Linking } from 'react-native';

import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';

// import CardStackStyleInterpolator from 'react-navigation/src/views/CardStackStyleInterpolator';

import { BgView, KmNavBar } from 'Kameo/components';

import { PersistGate } from 'redux-persist/lib/integration/react';
import SafariView from 'react-native-safari-view';

import './reactotron-config';

//Kameo
import {
  Login,
  Register,
  Home,
  Quest,
  Connect,
  What,
  Places,
  Place,
  Meet,
  Settings,
  Help,
  GoWho,
  GoWhat,
  GoWhere,
  GoWhen,
  GoFinal,
  EnRoute,
  Loading,
  GoRequest,
} from './containers/scenes';

import DrawerContent from 'Kameo/components/DrawerContent';

import reducers from './reducers';

import configureStore from 'Kameo/store';

const RouterWithRedux = connect()(Router);

const getSceneStyle = () => ({
  //  backgroundColor: 'rgba(0,0,0,0.1)',
  shadowOpacity: 1,
  shadowRadius: 3
});

const crossFade = (props) => {
  const { layout, position, scene } = props;

  const index = scene.index;
  const inputRange = [index - 1, index, index + 0.99, index + 1];

  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 0.999, index + 1],
    outputRange: [0, 1, 1, 0],
  });

  // const translateX = position.interpolate({
  //   inputRange,
  //   outputRange: ([100, 0, 0, 0]),
  // });

  const translateX = 0;

  const translateY = 0;

  return {
    opacity,
    transform: [{ translateX }, { translateY }],
  };
};

export const store = configureStore();

class App extends Component {
  componentWillMount = () => {
    // store.persistor.pause();
  }
 

  render() {
    return (
      <Provider store={store.store}>
        <PersistGate loading={<Loading />} persistor={store.persistor}>
          <RouterWithRedux getSceneStyle={getSceneStyle} transitionConfig={() => ({ screenInterpolator: crossFade })} >
          <Stack key="root" transitionConfig={() => ({ screenInterpolator: crossFade })} >
              <Scene key="login" component={Login} title="Sign In" hideNavBar />
              <Scene key="register" component={Register} title="Register" hideNavBar />
              <Drawer
                key="drawer"
                contentComponent={DrawerContent}
                drawerPosition="right"
                title="Kameo"
                drawerWidth={200}
                transitionConfig={() => ({ screenInterpolator: crossFade })}
                navBar={KmNavBar}
              >
                <Stack key="signedIn" transitionConfig={() => ({ screenInterpolator: crossFade })} hideNavBar>
                  <Scene key="home" component={Home} title="Home" />
                  <Scene key="quest" component={Quest} title="Quest" />
                  <Scene key="connect" component={Connect} title="Connect" />
                  <Scene key="meet" component={Meet} title="Meet" />
                  <Scene key="places" component={Places} title="Places" />
                  <Scene key="place" component={Place} title="Place" />
                  <Scene key="settings" component={Settings} title="Settings" />
                  <Scene key="help" component={Help} title="Help" />
                  <Scene key="what" component={What} title="#what" />
                  <Stack key="go" transitionConfig={() => ({ screenInterpolator: crossFade })} hideNavBar>
                    <Scene key="goRequest" component={GoRequest} title="GoRequest" />
                    <Scene key="goWho" component={GoWho} title="GoWho" />
                    <Scene key="goWhat" component={GoWhat} title="GoWhat" />
                    <Scene key="goWhere" component={GoWhere} title="GoWhere" />
                    <Scene key="goWhen" component={GoWhen} title="GoWhen" />
                    <Scene key="goFinal" component={GoFinal} title="GoFinal" />
                    <Scene key="enRoute" component={EnRoute} title="EnRoute" />
                  </Stack>
                </Stack>  
              </Drawer>
            </Stack>
          </RouterWithRedux>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    shadowOpacity: 0
  }
});

export default App;
