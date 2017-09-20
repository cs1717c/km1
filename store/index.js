'use strict'

// Redux
import { combineReducers, createStore } from 'redux'

// Navigation
// import { DrawerNavigation } from '../routers/DrawerNavigation/navigationConfiguration'
import { SignedInReducer } from '../routers/SignedInNavigation/navigationConfiguration'

export default createStore(
  combineReducers({
    signedIn: SignedInReducer,
    // signedIn: (state,action) => SignedInNavigation.router.getStateForAction(action,state),
    // drawer: (state,action) => DrawerNavigation.router.getStateForAction(action,state),
  })
)