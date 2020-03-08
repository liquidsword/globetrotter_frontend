import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import currentUser from './reducers/currentUser.js';
import myTrips from './reducers/myTrips.js';
import loginForm from './reducers/loginForm.js';
import signupForm from './reducers/signupForm.js';
import newTripForm from './reducers/newTripForm.js';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  currentUser,
  loginForm,
  myTrips,
  signupForm,
  newTripForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

export default store
