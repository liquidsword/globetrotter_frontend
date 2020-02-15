import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"

const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <input value="submit" type="Log Out"/>
    </form>
  )
}

export default connect(null, { logout })(logout)


//1. action(creator)
//2. another case statement in my current user
