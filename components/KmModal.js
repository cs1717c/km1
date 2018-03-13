'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
} from 'react-native';

import Modal from 'react-native-modal';

import BgView from './BgView';

class KmModal extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    }
  }

  componentWillReceiveProps ({ isVisible }) {
    this.setState({ isVisible });
  }

  dismiss = () => {
    console.log('dismissing');
    this.setState({ isVisible: false });
    console.log(this.state);
  }

  render() {

    return (
      <Modal
        style={[styles.modal, this.props.modalStyle]}
        onBackButtonPress={this.dismiss}
        onBackdropPress={() => this.dismiss()}
        {...this.props}
        isVisible={this.state.isVisible}
      >
        <BgView style={[styles.modalView, this.props.viewStyle]}>
          <Text>{this.state.isVisible}</Text>
          {this.props.children}
        </BgView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    borderColor: 'rgba(0,0,0,0.35)',
    borderWidth: 1,
    borderRadius: 1,
    marginVertical: 200,
    marginHorizontal: 0,
    height: 200,
  },

  modalView: {
    marginTop: 0,
    padding: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default KmModal;
