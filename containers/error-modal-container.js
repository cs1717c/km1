'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar, Text, TextInput, TouchableHighlight, Image, Modal } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';

import { ErrorActions } from 'Kameo/actions';

class ErrorModalContainer extends Component {
  static defaultProps = {
    showErrorModal: true,
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    if (this.props.error.errorModalVisible) {
      return (
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Text style={styles.errorText}>{this.props.error.errorText}</Text>
            <KmButton
              underlayColor="rgba(255,255,255,0.3)"
              onPress={this.closeModal.bind(this)}
            >
              OK
            </KmButton>
          </View>
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',    
    zIndex: 9,
  },
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 40,
    flexDirection: 'column',
    margin: 40,
    width: 300,
    height: 300,
    top: '50%',
    marginTop: -120,
    borderRadius: 8,
    zIndex: 10,
    backgroundColor: 'rgba(80,70,80,1)',
    justifyContent: 'space-between',
    borderWidth: 2,
  },
  errorText : {
    color: 'white',
  }
});

function mapStateToProps(store, ownProps) {
  return {
    ...store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    closeModal: () => {
      dispatch(ErrorActions.hideErrorModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorModalContainer);