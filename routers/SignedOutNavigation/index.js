'use strict'

import { StackNavigator } from 'react-navigation';

export const SignedOutNavigation = StackNavigator({
  Login: {
      screen: Login
  },
  Register: {
      screen: Register
  },

}, {
  headerMode: 'screen'
});
