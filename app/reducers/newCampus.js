const initialState = {
  name: "",
  imageUrl: "",
  description: ""
}

const WRITE_NEW_CAMPUS = "WRITE_NEW_CAMPUS"
const RESET_CAMPUS_FORM = "RESET_CAMPUS_FORM"

// ACTION CREATORS

export function writeNewCampus(campusItem) {
  return {
    type: WRITE_NEW_CAMPUS,
    campusItem
  }
}

export function resetCampusForm() {
  return {
    type: RESET_CAMPUS_FORM,
    initialState
  }
}

// SUB REDUCER
export default function newCampus(state = initialState, action) {
  switch (action.type) {
    case WRITE_NEW_CAMPUS:
      return Object.assign({}, state, action.campusItem)
    case RESET_CAMPUS_FORM:
      return Object.assign({}, action.initialState)
    default:
      return state
  }
}
