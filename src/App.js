import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import NavBar from './components/NavBar.js';
import Login from './components/Login.js';
import Logout from './components/Logout.js';
import Signup from './components/Signup.js';
import MyTrips from './components/MyTrips.js'
import MainContainer from './components/MainContainer.js'
import Home from './components/Home.js'
import NewTripForm from './components/NewTripForm.js'
import { Route, Swith, withRouter, Link } from 'react-router-dom'

class App extends React.Component{

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render () {
    const { loggedIn } = this.props
    return (
        <div className = "App">
          { loggedIn ? <NavBar/> : <Home/>
          <Switch>
              <Route exact path = '/login' component={Login}/>
              <Route exact path = '/my-trips' component={MyTrips}/>
              <Route exact path = '/signup' render={({history})=><Signup history={history}/>}/>
              <Route exact path = '/trips/new' component={NewTripForm}/>
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
