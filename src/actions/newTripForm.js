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
