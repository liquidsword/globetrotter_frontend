import React from 'react';
//1. first we take the action creator
import { createTrip } from '../actions/myTrips.js'
import { connect } from 'react-redux'

//3. This means Redux gives us back a prop called updateNewTripForm
//which when invoked Redux will now dispatch

const NewTripForm = ({ name, startDate, endDate, updateNewTripForm, userId, trip, handleSubmit, editMode }) => {
  const handleChange = event => {
    const { name, value } = event.target
    //4. Below is not an invocation of the action creator from the action creator on line 2.
    //It is now Redux dispatching the action built by the action creator with the appropriate
    //arguments.
    updateNewTripForm(name, value)
  }

    return (
      <form onSubmit={ event => {
        event.preventDefault()
        handleSubmit(name, startDate, endDate)
      }}>
        <input
          placeholder= "name"
          name="name"
          onChange={handleChange}
          value={name}
        /><br/>
        <input
          placeholder= "start date"
          name="startDate"
          onChange={handleChange}
          value={startDate}
        /><br/>
        <input
          placeholder= "end date"
          name="endDate"
          onChange={handleChange}
          value={endDate}
        /><br/>
        <input
          type="submit"
          value={editMode ? "Update Trip" : "Create Trip" }/>
      </form>
    )};

const mapStateToProps = state => {
  const userId =  state.currentUser ? state.currentUser.id : ""
  const { startDate, endDate, name } = state.newTripForm
  return {
    startDate,
    endDate,
    name,
    userId
  }
}
//2. we pass the action creator to redux's connect function
//using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateNewTripForm })(NewTripForm);
