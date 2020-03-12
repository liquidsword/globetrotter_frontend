import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const MyTrips = props => {
  const tripCards = props.trips.length > 0 ?
  props.trips.map(t => (<><Link key={t.id} to={`/trips/${t.id}`}> {t.attributes.name}</Link><br/></>)) : null

  return (
    tripCards
  )
}

const mapStateToProps = state => {
  return {
    trips: state.myTrips
  }
}
//we provide mapStateToProps to Redux in order to tell Redux:
//to please provide us access to your state so that we can pick and choose
//the pieces of state we would like available to this particular component as props
export default connect(mapStateToProps)(MyTrips)
