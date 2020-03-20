import React from 'react';
import { createTrip } from '../actions/myTrips';
import { connect } from 'react-redux'
import NewTripForm from './NewTripForm.js'

const NewTripFormWrapper = ({ history, createTrip }) => {

  const handleSubmit = (name, startDate, endDate, userId) => {
    createTrip({ startDate, endDate, name, userId }, history)

  }
    return <NewTripForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createTrip })(NewTripFormWrapper);
