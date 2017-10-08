
'use strict';

import React from 'react';

import {
  Image,
  View,
} from '@shoutem/ui';

class BgView extends View {

  render() {
    const { style, isDark } = this.props;

    if (isDark) {

      return (
      <Image source={require('../img/home_bg.png')} styleName='featured'>
        <View style={style}>
          {super.render()}
        </View>
      </Image>);
    } else {
      return  (
      <Image source={require('../img/home_bg.png')} styleName='featured'>
        <View style={style}>
          {super.render()}
        </View>
      </Image>);
    }
  }
}


export default BgView;
