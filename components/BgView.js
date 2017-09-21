'use strict';

import React from 'react';

import { StyleSheet, View, Image } from 'react-native';

class BgView extends View {
  render() {
    const { style } = this.props;

    return (
      <Image
        source={require('../img/bg.png')}
        style={styles.backgroundImage}
        resizeMode={Image.resizeMode.stretch}
      >
        <View style={style}>{super.render()}</View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
    margin: -1,
    marginTop: -70
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    //  backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80,
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30
  }
});

export { BgView };
