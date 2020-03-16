import React from 'react';
import { updateTrip } from '../actions/myTrips';
import { setFormDataForEdit } from '../actions/newTripForm';
import { connect } from 'react-redux'
import NewTripForm from './NewTripForm.js'

class EditTripFormWrapper extends React.component {
  //({ history, updateTrip }) =>

  componentDidMount(){
    this.props.setFormDataForEdit(this.props.trip)
  }

  handleSubmit = (event, name, startDate, endDate, userId, history) => {
    const { updateTrip } = this.props
    event.preventDefault()
    updateTrip({ startDate, endDate, name, tripID: trip.id, userId }, history)
  }

  render() {
    const { history, handleSubmit } = this.props
    return <NewTripForm editMode history={history} handleSubmit={handleSubmit} />
  }
}

export default connect(null, { updateTrip, setFormDataForEdit })(EditTripFormWrapper);
