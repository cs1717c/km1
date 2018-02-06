'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, StatusBar, Text, TextInput, TouchableHighlight, Image, Modal } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { BgView, KmInput, KmButton, KmText } from 'Kameo/components';

import { ErrorActions } from 'Kameo/actions';

import { ErrorModalContainer } from 'Kameo/containers';

class CommonComponentsContainer extends Component {
  static defaultProps = {
    showErrorModal: false,
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {
    return (<ErrorModalContainer />);
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    zIndex: 5,
  },
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

export default connect(mapStateToProps, mapDispatchToProps)(CommonComponentsContainer);
