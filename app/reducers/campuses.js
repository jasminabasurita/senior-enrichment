import axios from "axios"

const GET_CAMPUSES = "GET_CAMPUSES"
const GET_CAMPUS = "GET_CAMPUS"

// ACTION CREATORS

export function getCampuses(campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export function getCampus(campus) {
  return {
    type: GET_CAMPUS,
    campus
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

export function postCampus(newCampus) {
  return function thunk(dispatch) {
    return axios
      .post("/api/campuses", newCampus)
      .then(res => res.data)
      .then(returnedCampus => {
        const action = getCampus(returnedCampus)
        dispatch(action)
      })
  }
}

export function deleteCampus(campusId) {
  return function thunk(dispatch) {
    return axios
      .delete(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses)
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

export function updateCampus(updatedCampus, campusId) {
  return function thunk(dispatch) {
    return axios
      .put(`/api/campuses/${campusId}`, updatedCampus)
      .then(res => res.data)
      .then(updatedCampusList => {
        const action = getCampuses(updatedCampusList)
        dispatch(action)
      })
  }
}

// SUB-REDUCERS

export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case GET_CAMPUS:
      return [...state, action.campus]
    default:
      return state
  }
}
