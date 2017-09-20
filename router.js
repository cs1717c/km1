import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
    DrawerItems
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import Api from "./api";
import Register from './scenes/register';
import Login from './scenes/login';
import Home from './scenes/home';
import What from './scenes/what';
import Go from './scenes/go';
import Quest from './scenes/quest';
import Connect from './scenes/connect';
import Places from './scenes/places';
import Settings from './scenes/settings';
import Help from './scenes/help';


import ImageHeader from './components/header';
import CustomMenu from './components/CustomMenu';


export const SignedOutStack = StackNavigator({
    Login: { screen: Login },
    Register: { screen: Register },

}, {
        headerMode: 'screen'
    });


export const DrawerStack = DrawerNavigator({
    Home: { screen: Home },
    What: { screen: What },
    Go: { screen: Go },
    Quest: { screen: Quest },
    Connect: { screen: Connect },
    Places: { screen: Places },
    Settings: { screen: Settings },
    Help: { screen: Help },
    
}, {
        contentComponent: CustomMenu,
        drawerPosition: 'right',
        drawerWidth: 200,
        gesturesEnabled: false
    })

export const DrawerNavigation = StackNavigator({
    DrawerStack: { screen: DrawerStack }
}, {
        headerMode: 'screen',
        navigationOptions: ({ navigation }) => ({
            header: (props) => <ImageHeader {...props} />,
        })
    })

// export const SignedInStack = StackNavigator({
//     Home: { screen: Home },
// }, {
//         headerMode: 'screen'
//     });

export const createRootStack = (signedIn = false) => {
    return StackNavigator(
        {
            SignedIn: {
                screen: DrawerNavigation,
                navigationOptions: {
                    // gesturesEnabled: false
                }
            },

            SignedOut: {
                screen: SignedOutStack,
                navigationOptions: {
                    // gesturesEnabled: false
                }
            }
        },
        {
            headerMode: "none",
            mode: "modal",
            initialRouteName: signedIn ? "SignedIn" : "SignedOut"
        }
    );
};

