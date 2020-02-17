//synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const logoutCurrentUser = () => {
  return {
    type: "LOGOUT_CURRENT_USER"
  }
}


//asychronous action creators
export const login = credentials => {
  console.log("credentials are", credentials)
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
    })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
          }
        })
        .catch(console.log)
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(logoutCurrentUser())
    return fetch('http://localhost:3001/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}


export const getCurrentUser = () => {
  console.log("DISPATCHING GET CURRENT USER")
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
        .then(r => r.json())
        .then(user => {
          if (user.error) {
            alert(user.error)
          } else {
            dispatch(setCurrentUser(user))
          }
        })
        .catch(console.log)
  }
}