'use strict';

import React, { Component } from 'react';

import config from '../../services/api/config';

import {
  StyleSheet,
  Linking,
  Platform,
  View,
  StatusBar,
  Text,
  Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';

import { AuthenticationActions, ErrorActions } from 'Kameo/actions';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { ErrorModalContainer, CommonComponentsContainer } from 'Kameo/containers';

import { Utilities } from 'Kameo/services';

import SafariView from 'react-native-safari-view';

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

  componentDidMount = () => {
    console.log('logging in');
    console.log(this.props);

    if (this.props.authentication.loggedIn) {
      Actions.home();
    }

    // Add event listener to handle OAuthLogin:// URLs
    Linking.addEventListener('url', this.handleOpenURL);
    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.handleOpenURL({ url });
      }
    });
  }

  componentWillUnmount() {
    // Remove event listener
    Linking.removeEventListener('url', this.handleOpenURL);
  };

  onPressLogin = (e) => {
    const { email, password } = this.state;

    this.props.login(email, password);
  }

  handleOpenURL = ({ url }) => {    
    // Extract stringified user string out of the URL
    const [, response] = url.match(/response=([^#]+)/);

    const decodedResponse = JSON.parse(decodeURI(response));

    console.log('got response from FB');
    console.log(decodedResponse);
    this.props.fbLogin(decodedResponse.user, decodedResponse.token);

    // this.setState({
    //   // Decode the user string and parse it into JSON
    //   user: decodedResponse.user
    // });

    if (Platform.OS === 'ios') {
      SafariView.dismiss();
    }
  };

  // Handle Login with Facebook button tap
  loginWithFacebook = () => this.openURL(`${config.url}/auth/facebook`);

  // Handle Login with Google button tap
  loginWithGoogle = () => this.openURL(`${config.url}/auth/google`);

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };



  // fbAuth() {
  //   LoginManager.logInWithReadPermissions(['public_profile']).then(
  //     function (result) {
  //       if (result.isCancelled) {
  //         console.log('Login was cancelled');
  //       } else {
  //         console.log('Login was successful with permissions: '
  //           + result.grantedPermissions.toString());

  //         console.log(result);
  //       }
  //     },
  //     function (error) {
  //       console.log('Login failed with error: ' + error);
  //     }
  //   );
  // }

  loginWithFacebook = () => this.openURL(`${config.url}/auth/facebook`);

  // Open URL in a browser
  openURL = (url) => {
    // Use SafariView on iOS
    if (Platform.OS === 'ios') {
      SafariView.show({
        url: url,
        fromBottom: true,
      });
    }
    // Or Linking.openURL on Android
    else {
      Linking.openURL(url);
    }
  };

  render() {
    return (
        <BgView isDark>      
          <ErrorModalContainer />
          <Spinner visible={this.props.spinner.visible} />
          <KeyboardAwareScrollView>      
          <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

            <Image source={require('Kameo/img/logo2.png')} style={styles.logo} resizeMode={Image.resizeMode.contain} />

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


            <KmButton
              underlayColor="rgba(255,255,255,0.1)"
              onPress={this.loginWithFacebook.bind(this)}
              style={styles.signInWithFacebookButton}
            >
              Sign In with Facebook
            </KmButton>


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

  logo: {
    // fontSize: 24,
    // fontWeight: '300',
    marginBottom: 0,
    marginTop: 40,
    width: 130,
    // fontFamily: 'Avenir Next',        
    // backgroundColor: 'rgba(0,0,0,0)',
    // color: 'rgba(255,255,255,1)'
  },
  
  inputContainer: {
    marginTop: 70,
    marginBottom: 30,
  },

  input: {
    fontSize: 18
  },

  signInButton: {
    marginTop: 55,
    width: '70%',
  },

  registerLink: {
    marginTop:30,
  },

  signInWithFacebookButton: {
    marginTop: 70,
    backgroundColor: '#3b59CC'
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
    fbLogin: (user, token) => {
      dispatch(AuthenticationActions.fbLogin(user, token));
    },
    showErrorModal: (text) => {
      dispatch(ErrorActions.showErrorModal(text));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
