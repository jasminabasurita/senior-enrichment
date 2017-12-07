import axios from "axios"

const GET_CAMPUSES = "GET_CAMPUSES"

// ACTION CREATORS

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

// THUNK CREATORS

export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios
      .get("/api/campuses")
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
  }
}

// SUB-REDUCERS

export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    default:
      return state
  }
}
