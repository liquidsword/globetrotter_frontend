//synchronous actions

export const updateNewTripForm = (name, value) => {
  return {
    type: "UPDATE_NEW_TRIP_FORM",
    formData: { name, value }
  }
}

export const resetNewTripForm = () => {
  return {
    type: "RESET_NEW_TRIP_FORM"
  }
}

export const setFormDataForEdit = trip => {
  const tripFormData = {
    name: trip.attributes.name,
    startDate: trip.attributes.start_date,
    endDate: trip.attributes.end_date
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    tripFormData
  }
}
