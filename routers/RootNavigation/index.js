'use strict'

import { StackNavigator } from 'react-navigation';

import  { SignedInNavigation } from '../SignedInNavigation';
import  { SignedOutNavigation } from '../SignedOutNavigation';

export const RootNavigation = StackNavigator({
  SignedIn: {
      screen: SignedInNavigation,
      navigationOptions: {
          // gesturesEnabled: false
      }
  },

  SignedOut: {
      screen: SignedOutNavigation,
      navigationOptions: {
          // gesturesEnabled: false
      }
  }
}, {
  headerMode: "none",
  mode: "modal",
  initialRouteName: SignedInNavigation
});