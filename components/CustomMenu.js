'use strict';

import React, { Component } from 'react';

import {
    StyleSheet,
    TextInput,
    TouchableHighlight,
    AsyncStorage,
    ActivityIndicatorIOS,
    Text,
    View,
    Image,
    ImageBackground,
} from 'react-native';

import {
    DrawerItems
} from 'react-navigation';

import BgView from './BgView';
import MenuItems from './MenuItems';

const CustomMenu = (props) => (
    <View style={styles.drawer}>
        <ImageBackground source={require('../img/bg2.png')} style={styles.backgroundImage} resizeMode={Image.resizeMode.cover} >
            <View style={styles.container}>
            <MenuItems {...props} />
            </View>
        </ImageBackground>
    </View>
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        margin: -1,
        marginTop: -50,
        marginLeft:-200,
        borderWidth: 4,
    },
    items: {
       
    },
    label: 
    {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#fff',
        fontFamily: 'Avenir Next',
        fontWeight: '400',
        padding:10
    },
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        //  backgroundColor: '#F5FCFF',
        padding: 0,
        paddingTop: 40,
        alignSelf: 'stretch',
        marginLeft: 340,
        marginRight: 0
    },
    drawer: {
        flex: 1,
        overflow: 'hidden',
    }
});


export default CustomMenu;