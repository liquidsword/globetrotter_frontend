import React from 'react';
import { updateTrip, deleteTrip } from '../actions/myTrips';
import { setFormDataForEdit, resetNewTripForm } from '../actions/newTripForm';
import { connect } from 'react-redux'
import NewTripForm from './NewTripForm.js'

class EditTripFormWrapper extends React.Component {
  //({ history, updateTrip }) =>

  componentDidMount(){
    this.props.setFormDataForEdit(this.props.trip)
  }

  componentDidUpdate(prevProps) {
    this.props.trip && !prevProps.trip && this.props.setFormDataForEdit(this.props.trip)
  }

  componentWillUnmount() {
    this.props.resetNewTripForm()
  }

  handleSubmit = (name, startDate, endDate, userId) => {
    const { updateTrip, trip, history } = this.props
    updateTrip({ startDate, endDate, name, tripId: trip.id, userId }, history)
  }

  render() {
    const { history, deleteTrip, trip } = this.props
    const tripId = trip ? trip.id : null
    return <>
              <NewTripForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "red"}}
                onClick={() => deleteTrip(tripId, history)}>DELETE THIS TRIP!</button>
          </>
  }
}

export default connect(null, { updateTrip, setFormDataForEdit, resetNewTripForm, deleteTrip })(EditTripFormWrapper);
