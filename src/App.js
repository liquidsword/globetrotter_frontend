import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    return (
      //think about putting this into a nav bar
      this.props.currentUser ? <Login/> : <Logout/>
    );
  }
}

const mapStateToProps = state({ currentUser }) = > {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
