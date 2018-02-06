import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class KmInput extends Component {
  render = () => {
    const { ...props } = this.props;

    const containerStyle = props.style;

    delete props.style;
    
    return (
      <View style={[styles.container, containerStyle]}>
        <TextInput style={[styles.input, props.inputStyle]} {...props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: '100%',
    width: '100%',
    fontSize: 16,
    width: '100%',
    borderColor: 'rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,1)',
    fontFamily: 'Avenir Next'
  },
  container: {
    height: 36,
    width: '100%',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(255,255,255,0.2)',
  }
});

export default KmInput;