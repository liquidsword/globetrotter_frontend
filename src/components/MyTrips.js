import React from 'react';
import TripCard from './TripCard.js'
import { connect } from 'react-redux';


const MyTrips = props => {
  const tripCards = props.trips.length > 0 ? props.trips.map(t => <TripCard trip={t} key={t.id}/>) : null
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
//to please provide us access to your state so taht we can pick and choose
//the pieces of state we would like available to this particular component as props
export default connect(mapStateToProps)(MyTrips)
