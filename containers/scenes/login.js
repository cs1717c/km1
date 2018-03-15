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
    console.log('event listener added');

    // Launched from an external URL
    Linking.getInitialURL().then((url) => {
      console.log('wtf');
      console.log(url);
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
    console.log('handle open url login');
    console.log(url);
    
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
  loginWithFacebook = () => console.log('loginwithfb') || this.openURL(`${config.url}/auth/facebook`);

  // Open URL in a browser
  openURL = (url) => {
    console.log('opening url');
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


  render() {
    return (
        <BgView isDark>      
          <ErrorModalContainer />
          <Spinner visible={this.props.spinner.visible} />
          <KeyboardAwareScrollView>      
          <View style={styles.container}>
            <StatusBar backgroundColor="blue" barStyle="light-content" hidden />

            <Image source={require('Kameo/img/logo2.png')} style={styles.logo} resizeMode={Image.resizeMode.contain} />

            <View style={styles.inputContainer}>

              <KmInput
                onChangeText={text => this.setState({ email: text })}
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.5)"
                autoCapitalize="none"
                style={styles.input}
              />

              <KmInput
                onChangeText={text => this.setState({ password: text })}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="rgba(255,255,255,0.5)"
                style={styles.input}
              />
              
              <KmButton
                underlayColor="rgba(255,255,255,0.3)"
                onPress={this.onPressLogin.bind(this)}
                style={styles.signInButton}
              >
    Sign In
              </KmButton>

            </View>

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
    padding: 30,
    flexDirection: 'column'
  },

  logo: {
    // fontSize: 24,
    // fontWeight: '300',
    marginBottom: 30,
    marginTop: 0,
    width: 100,
    // fontFamily: 'Avenir Next',        
    // backgroundColor: 'rgba(0,0,0,0)',
    // color: 'rgba(255,255,255,1)'
  },
  
  inputContainer: {
    marginTop: 0,
    marginBottom: 30,
    marginHorizontal: 50,
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
  },

  input: {
    fontSize: 16,
    marginTop: 20,
  },

  signInButton: {
    marginTop: 40,
    width: '70%',
  },

  registerLink: {
    marginTop: 0,
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
