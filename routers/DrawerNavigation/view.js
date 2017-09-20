'use strict'

// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { DrawerNavigation } from './navigationConfiguration';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
 return {
  navigationState: state.drawer,
  }
}

class DrawerNavigationView extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <DrawerNavigation
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
    )
  }
}

export default connect(mapStateToProps)(DrawerNavigationView)