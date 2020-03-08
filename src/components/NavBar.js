import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {
  return (
    <div className = "NavBar">
      <NavLink exact activeClassName to="/trips">My Trips  |  </NavLink>
      <NavLink exact activeClassName to="/tripsnew">New Trips  |  </NavLink>
      { loggedIn ? <Logout/> : null }
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
