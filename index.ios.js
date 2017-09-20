/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


const SERVER_URL = "http://localhost:5000/";

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import  authReducer from './reducers/auth';
import  menuReducer from './reducers/menu';
//import logger from 'redux-logger';


import { SignedInStack, SignedOutStack, createRootStack } from './router';

import Api from "./api";

const AppNavigator =  createRootStack(true);

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('SignedIn'));

// const middleware = () => {
//   return applyMiddleware(logger())
// }


const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state);
  return newState || state;
};

const appReducer = combineReducers({
  nav: navReducer,
  menu: menuReducer,
  auth: authReducer
});

const store = createStore(appReducer);

const mapStateToProps = (state) => ({
  nav: state.nav
});

class App extends React.Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     signedIn: false,
  //     checkedSignIn: false
  //   };
  // }

  // componentWillMount() {
  //   Api.isSignedIn()
  //     .then(res => this.setState({ signedIn: res, checkedSignIn: true }))
  //     .catch(err => alert("An error occurred"));
  // }

  render() {
    // const { checkedSignIn, signedIn } = this.state;

    // if (!checkedSignIn) {
    //   return null;
    // }


    return (
          <AppNavigator navigation={addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav
          })} />
    );

  }
}

const AppWithNavigationState = connect(mapStateToProps)(AppNavigator);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Kameo', () => Root);


const rootStyle = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    margin: -1,
    marginTop: 0
  }
});