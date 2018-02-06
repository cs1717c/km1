'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar, Text, TextInput, TouchableHighlight, Image, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';

import { mainStyles } from 'Kameo/style.js';

import { AuthenticationActions, ErrorActions } from 'Kameo/actions';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ErrorModalContainer, CommonComponentsContainer } from 'Kameo/containers';

import Spinner from 'react-native-loading-spinner-overlay';

const goToRegister = () => {
  Actions.register();
};

class Login extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  }

  onPressLogin = (e) => {
    const { email, password } = this.state;

    this.props.login(email, password);
  }

  render() {
    return (
        <BgView isDark>      
          <ErrorModalContainer />
          <Spinner visible={this.props.spinner.visible} />
          <KeyboardAwareScrollView>      
          <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

            <Text style={styles.heading}>Sign in to Kameo</Text>

            <KmInput
              onChangeText={text => this.setState({ email: text })}
              placeholder="Email"
              placeholderTextColor="rgba(255,255,255,0.5)"
              autoCapitalize="none"
              style={styles.inputContainer}
            />

            <KmInput
              onChangeText={text => this.setState({ password: text })}
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="rgba(255,255,255,0.5)"
            />

            <KmButton
              underlayColor="rgba(255,255,255,0.3)"
              onPress={this.onPressLogin.bind(this)}
              style={styles.signInButton}
            >
  Sign In
            </KmButton>

            <KmText style={styles.registerLink} onPress={goToRegister}>
              Register
            </KmText>

            <KmText style={styles.facebookLink} onPress={goToRegister}>
              Sign in with Facebook
            </KmText>

          </View>
          </KeyboardAwareScrollView>
        </BgView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
    flexDirection: 'column'
  },

  heading: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 40,
    marginTop: 40,
    fontFamily: 'Avenir Next',        
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'rgba(255,255,255,1)'
  },
  
  inputContainer: {
    marginTop: 30,
    marginBottom: 20,
  },

  input: {
    fontSize: 18
  },

  signInButton: {
    marginTop: 30,
    width: '70%',
  },

  registerLink: {
    marginTop: 70,
  },

  facebookLink: {
    marginTop: 30,
  },
  // placeholder: {
  //   color: 'rgba(255,255,255,1)'
  // },
  // registerButton: {
  //   height: 50,
  //   backgroundColor: 'rgba(255,255,255,0.15)',
  //   alignSelf: 'stretch',
  //   marginTop: 30,
  //   justifyContent: 'center',
  //   borderRadius: 4,
  //   borderWidth: 1,
  //   borderColor: 'rgba(255,255,255,1)'
  // },
  // registerLink: {
  //   fontSize: 18,
  //   fontWeight: '200',
  //   backgroundColor: 'rgba(0,0,0,0)',
  //   color: '#FFFFFF',
  //   marginBottom: 20,
  //   marginTop: 40
  // },

  // registerButtonText: {
  //   fontSize: 22,
  //   color: '#FFFFFF',
  //   alignSelf: 'center'
  // },

  // error: {
  //   color: 'red',
  //   paddingTop: 10
  // },
  // loader: {
  //   marginTop: 20
  // }
});

function mapStateToProps(store, ownProps) {
  return {
    ...store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password, name) => {
      dispatch(AuthenticationActions.login(email, password, name));
    },
    showErrorModal: (text) => {
      dispatch(ErrorActions.showErrorModal(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
