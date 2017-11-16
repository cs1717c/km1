import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';

class KmScrollView extends Component {

  componentDidMount() {
    this.refs.scrollView.scrollTo({ x: 0, y: 400, animated: true });
  }

  render = () => {
    const { style, inverted, ...props } = this.props;
    
    delete props.style;

    if (inverted) {
      return (<View style={style}>
        <Image source={require('Kameo/img/gradient5.png')} style={styles.scrollGradientInverted} pointerEvents={'none'} />
          <ScrollView style={[styles.scrollerInverted, props.scrollStyle]} ref="scrollView">
          <View style={styles.spacer} />
            {props.children}
            <View style={styles.spacerBottom} />
          </ScrollView>
        </View>);
    } 
      return (
        <View style={style}>
          <ScrollView style={[styles.scroller, props.scrollStyle]}
            onContentSizeChange={(contentWidth, contentHeight)=>{        
          this.scrollView.scrollToEnd({animated: true});
      }}>
          >
            {props.children}
            <View style={styles.spacer} />
          </ScrollView>
          <Image source={require('Kameo/img/gradient4.png')} style={styles.scrollGradient} pointerEvents={'none'} />
        </View>
      );
    
  }
}

const styles = StyleSheet.create({
  
  scroller: {
    borderColor: 'red',
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
    marginTop: 0,
    marginBottom: -140,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },

  scrollerInverted: {
    borderColor: 'red',
    // borderWidth: 2,
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
    marginTop: -120,
    marginBottom: 0,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },

  scrollGradient: {
    zIndex: 100,
    
  },

  scrollGradientInverted: {
     zIndex: 100,
    //  borderWidth: 2,
    //  marginTop: -40,
  },

  spacer: {
    height: 90,
  },
  
  spacerBottom: {
    height: 30
  }
});

export default KmScrollView;
