'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton } from 'Kameo/components';

import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';

import { WhatActions } from 'Kameo/actions';

class What extends Component {
  handleSearchInput = (text) => {
    console.log('input');
    this.setState({query: text});
    this.props.fetchTags(text);
    console.log(this.state);
  }
  
  handleOnAddTag = () => {
    console.log('adding');
    this.props.addTag(this.state.query);
  }

  render() {
    const { tags } = this.props.what;

    const tagRows = [];
    
    console.log(tags);

    const fetchedTags = tags.tags;
    
    for (const tag of fetchedTags) {
      tagRows.push(
        <View key={tag._id} style={styles.tagRow}>
          <KmText style={styles.tag}>{tag.tag}</KmText>
          <KmText style={styles.subscriberCount}>{tag.users.length}</KmText>
        </View>);
    }

    if (tagRows.length === 0) {
      tagRows.push(
        <View key='add-tag' style={styles.tagRow}>
          <KmText style={styles.tagAdd} onPress={this.handleOnAddTag}>Add #{this.state.query}</KmText>
        </View>);
    }

    return (
      <BgView style={styles.page}>
        <KmInput 
          style={styles.search}
          inputStyle={styles.searchInput}
          placeholder='#what are you into?'
          placeholderTextColor="rgba(255,255,255,1)"
          autoCapitalize="none"
          onChangeText={this.handleSearchInput}
        />
        

        <ScrollView style={styles.tagScroller}>
          {tagRows}
          <View style={styles.tagSpacer} />
        </ScrollView>
        <Image source={require('Kameo/img/gradient4.png')} style={styles.scrollGradient} pointerEvents={'none'} />
        <View style={styles.footer}>
        <KmButton style={styles.next}>show my selections</KmButton>
          <KmButton style={styles.next} onPress={Actions.goWhere}>done</KmButton>
        </View>

      </BgView>
    );
  }
}

const styles = {
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 20,
    borderWidth: 1,
    borderColor: 'red'
  },

  scrollGradient: {

  },

  page: {
    padding: 0,
    paddingTop: 50
  },

  header: {
    marginBottom: 10,
    marginLeft: 10
  },

  search: {
    paddingLeft: 20,
    borderColor: 'rgba(0,0,0,1)',
    paddingBottom: 30,
    borderWidth: 1,
    height: 45,
  },

  searchInput: {
    fontSize: 20,
    height: 45,
    // borderWidth: 2,
  },

  tagScroller: {
    //  borderWidth: 1,
    borderColor: 'red',
    marginLeft: 0,
    marginRight: 0,
    padding: 20,
    marginTop: 0,
    marginBottom: -120,
    backgroundColor: 'rgba(0,0,0,0.2)'
  },

  scrollGradient: {

  },

  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },

  tagSpacer: {
    height: 90,
  },

  tag: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.5)'
  },

  tagAdd: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    color: 'rgba(255,255,255,1)'
  },

  subscriberCount: {
    marginTop: 2, 
    color: 'rgba(255,255,255,0.75)',
    fontSize: 12,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  }
};

// export default What;

function mapStateToProps(store, ownProps) {
  return {
    ...store
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTag: (tag) => {
      dispatch(WhatActions.addTag(tag));
    },
    fetchTags: (query) => {
      dispatch(WhatActions.fetchTags(query));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(What);
