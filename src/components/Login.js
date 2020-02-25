import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm_action.js"
import { login } from "../actions/currentUser.js"

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} />
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} />
      <input value="Login" type="submit"/>
    </form>
  )
}
//taking state from redux and putting it into the store via connect
//it gives me an argument coming to this component that looks like this:
// {
//   username: "liquidsword"
//   password: "torch"
// }
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
