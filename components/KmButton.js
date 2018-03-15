import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text } from 'react-native';

class KmButton extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render = () => {
    const { textStyle, isToggle, style, ...props } = this.props;
    
    delete props.style;

    return (
        <TouchableHighlight underlayColor="rgba(255,255,255, 0.4)" style={[styles.button, style]} {...props}>
          <Text style={[styles.text, textStyle]}>{props.children}</Text>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  text: {
    color: 'rgba(255,255,255,1)',
    textAlign: 'center',    
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Avenir Next',    
  }
});

export default KmButton;