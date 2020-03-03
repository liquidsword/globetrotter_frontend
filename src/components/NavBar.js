import React from 'react';
import { connect } from 'react-redux';
import Login from './Login.js';
import Logout from './Logout.js';

const NavBar = ({ currentUser }) => {
  return (
    <div className = "NavBar">
      { currentUser ? <strong> Hi, welcome to Globetrotter.</strong> : ""}
      <button>Login </button>
      OR
      <button>Sign Up</button>
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
