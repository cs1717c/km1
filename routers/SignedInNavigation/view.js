'use strict'

// React
import React from 'react';

// Navigation
import { addNavigationHelpers } from 'react-navigation';
import { SignedInNavigation } from './navigationConfiguration';

//Redux
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
 return {
  navigationState: state.signedIn,
  }
}

class SignedInNavigationView extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
      <SignedInNavigation
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

export default connect(mapStateToProps)(SignedInNavigationView)