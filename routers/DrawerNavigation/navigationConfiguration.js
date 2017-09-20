'use strict'

import { DrawerNavigator } from 'react-navigation';
// import { HomeScreen } from '../../scenes/HomeScreen';
import { TabOneScreenOne } from './TabOneScreenOne';

// import { CustomMenu } from '../../components';

export const DrawerNavigation = DrawerNavigator({
  Home: {
    screen: TabOneScreenOne
  },
  // What: {
  //   screen: What
  // },
  // Go: {
  //   screen: Go
  // },
  // Quest: {
  //   screen: Quest
  // },
  // Connect: {
  //   screen: Connect
  // },
  // Places: {
  //   screen: Places
  // },
  // Settings: {
  //   screen: Settings
  // },
  // Help: {
  //   screen: Help
  // },

}, {
  // contentComponent: CustomMenu,
  drawerPosition: 'right',
  drawerWidth: 200,
  gesturesEnabled: true
})