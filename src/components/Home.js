import React from 'react'
import { Link } from 'react-router-dom'

const Home = ({}) => (
  <div>
    <h4>Welcome, please <Link to="/signup">sign-up</Link> or <Link to="/login">Log In</Link></h4>

  </div>
);

export default Home;
