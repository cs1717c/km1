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
} from 'react-native';

import {
    DrawerItems
} from 'react-navigation';

import BgView from './BgView';
import MenuItems from './MenuItems';

const CustomMenu = (props) => (
    <View style={styles.drawer}>
        <Image source={require('../img/bg.png')} style={styles.backgroundImage} resizeMode={Image.resizeMode.cover} >
            <View style={styles.container}>
            <MenuItems {...props} />
            </View>
        </Image>
    </View>
);

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        alignSelf: 'stretch',
        width: null,
        margin: -1,
        marginTop: -70,
        marginLeft:-200,
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
        paddingTop: 80,
        alignSelf: 'stretch',
        marginLeft: 240,
        marginRight: 0
    },
    drawer: {
        flex: 1,
        overflow: 'hidden',
    }
});


export default CustomMenu;