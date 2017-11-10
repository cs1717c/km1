import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

class KmText extends Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }
  
  render() {
    const { ...props } = this.props;
    
    const myStyle = props.style;
    
    delete props.style;

    return (
        <Text ref={component => this._root = component} style={[styles.text, myStyle]} {...props}>{props.children}</Text>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'rgba(255,255,255,1)',
    fontSize: 18,
    fontFamily: 'Avenir Next',    
    backgroundColor: 'rgba(0,0,0,0)',
  }
});

export default KmText;