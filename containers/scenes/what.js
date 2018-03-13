'use strict';

import React, { Component } from 'react';

import { StyleSheet, View, Image, Text, ScrollView, TouchableHighlight } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { BgView, KmText, KmInput, KmButton, KmModal } from 'Kameo/components';

import LinearGradient from 'react-native-linear-gradient';

import { connect } from 'react-redux';

import { WhatActions } from 'Kameo/actions';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { filter } from 'lodash';

class What extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      isModalVisible: false,
      selectedTag: '',
      showSelections: false,
    };
  }

  onSwipeLeft(gestureState, tag) {
    this.setState({ selectedTag: tag });
    this.toggleModal();
  }

  toggleModal = () =>
  this.setState({ isModalVisible: !this.state.isModalVisible });

  hideModal = () =>
    this.setState({ isModalVisible: false });

  removeSelectedTag = () => {
    const { removeTag } = this.props;
    removeTag(this.state.selectedTag);
    this.setState({ isModalVisible: false });
  }

  handleOnAddTag = () => {
    console.log('adding');
    this.props.addTag(this.state.query);
  }

  handleOnToggleTag = (tag) => {
    console.log('toggling');
    this.props.toggleTag(tag);
  }

  handleSearchInput = (text) => {
    console.log('input');
    this.setState({ query: text });
    this.props.fetchTags(text);
    console.log(this.state);
  }

  toggleShowSelections = () => {
    this.setState({showSelections: !this.state.showSelections });
  }

  render() {
    const gestureConfig = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    const { tags } = this.props.what;

    const tagRows = [];
    
    console.log(tags);

    const fetchedTags = tags.tags;

    const tagResults = filter(fetchedTags, (item) => {
      return !this.state.showSelections || item.selected;
    });
    
    for (const tag of tagResults) {
      let tagStyle;
      let tagRowStyle;

      if (tag.selected) {
        tagStyle = styles.selectedTag;
        tagRowStyle = styles.selectedTagRow;
      } else {
        tagStyle = styles.tag;
        tagRowStyle = styles.tagRow;
      }
      tagRows.push(
        <GestureRecognizer
        onSwipeLeft={(state) => this.onSwipeLeft(state, tag)}
        config={gestureConfig}
        key={tag._id}
        >
          <TouchableHighlight key={tag._id} style={tagRowStyle} onPress={() => this.handleOnToggleTag(tag)}>
            <View style={styles.tagView}>
              <KmText style={tagStyle}>{tag.tag}</KmText>
              <View style={styles.subscriberWrapper}>
                <KmText style={styles.subscriberCount}>{tag.users.length}</KmText>
              </View>
            </View>
          </TouchableHighlight>
        </GestureRecognizer>);
    }

    if (tagRows.length === 0) {
      tagRows.push(
        <View key='add-tag' style={styles.tagRow}>
          <KmText style={styles.tagAdd} onPress={this.handleOnAddTag}>Add #{this.state.query}</KmText>
        </View>);
    }

    return [
      <KmModal
        isVisible={this.state.isModalVisible}
        onModalHide={() => this.hideModal()}
      >
        <Text style={styles.modalText}>Are you sure you want to delete {this.state.selectedTag.tag
          }?</Text>
        <View style={styles.modalButtonRow}>
          <KmButton style={styles.modalButton} onPress={() => this.removeSelectedTag()}>Delete</KmButton> 
          <KmButton style={styles.modalButton} onPress={() => this.hideModal()}>Cancel</KmButton>
        </View>
      </KmModal>,
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
        {/* <Image source={require('Kameo/img/gradient4.png')} style={{opacity: 0.4}} pointerEvents={'none'} /> */}
        <View style={styles.footer}>
        <KmButton style={styles.next} onPress={() => this.toggleShowSelections()}>show selections only</KmButton>
          <KmButton style={styles.next} onPress={Actions.goWhere}>done</KmButton>
        </View>

      </BgView>
    ];
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
    opacity: 0.2,
    marginBottom: -120,
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
    borderColor: 'rgba(255,255,255,0.5)',
    backgroundColor: 'rgba(150,255,200,0.2)',
    paddingBottom: 30,

    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',

    height: 45,
    marginTop: 5,
  },

  searchInput: {
    fontSize: 20,
    height: 45,
    // borderWidth: 2,
  },

  tagScroller: {
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.5)',
    marginLeft: 0,
    marginRight: 0,
    padding: 5,
    marginTop: 0,
    
    // marginBottom: -120,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },

  scrollGradient: {

  },

  tagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    margin: 10,
    shadowOffset: { width: 0, height: 3, },
    shadowColor: 'rgba(0,0,0,1)',
     shadowOpacity: 0.3,
  },

  tagView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  selectedTagRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 10,
    backgroundColor: 'rgba(67,74,231,0.7)',
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    // borderColor: 'rgba(255,255,255,0.2)',
    shadowOffset: { width: 0, height: 3, },
    shadowColor: 'rgba(67,74,231,1)',
     shadowOpacity: 0.5,
    // borderRadius: 10,
  },

  selectedTag: {
    fontSize: 20,
    fontWeight: '600',
    color: 'rgba(255,255,255,0.7)'
  },


  tagSpacer: {
    height: 90,
  },

  tag: {
    fontSize: 20,
    fontWeight: '400',
    color: 'rgba(255,255,255,0.7)'
  },

  tagAdd: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    width: '100%',
    color: 'rgba(255,255,255,1)'
  },

  modalText: {
    color: 'white',
  },

  modalButtonRow: {
    flexDirection: 'row',
    marginTop: 30,
  },

  modalButton: {
    margin: 20,
  },

  subscriberWrapper: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  subscriberCount: {
    marginTop: 2, 
    color: 'rgba(255,255,255,0.75)',
    fontSize: 18,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginTop: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)'
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
    toggleTag: (tag) => {
      dispatch(WhatActions.toggleTag(tag));
    },
    removeTag: (tag) => {
      dispatch(WhatActions.removeTag(tag));
    },
    fetchTags: (query) => {
      dispatch(WhatActions.fetchTags(query));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(What);
