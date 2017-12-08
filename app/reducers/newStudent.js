const initialState = {
  firstName: "",
  lastName: "",
  campusId: 1,
  email: ""
}

//

const WRITE_FIRST_NAME = "WRITE_FIRST_NAME"
const WRITE_LAST_NAME = "WRITE_LAST_NAME"
const WRITE_EMAIL = "WRITE_EMAIL"
const WRITE_CAMPUS_ID = "WRITE_CAMPUS_ID"
const RESET_STUDENT_FORM = "RESET_STUDENT_FORM"

// ACTION CREATORS

export function writeFirstName(firstName) {
  return {
    type: WRITE_FIRST_NAME,
    firstName
  }
}
export function writeLastName(lastName) {
  return {
    type: WRITE_LAST_NAME,
    lastName
  }
}
export function writeEmail(email) {
  return {
    type: WRITE_EMAIL,
    email
  }
}
export function writeCampusId(campusId) {
  return {
    type: WRITE_CAMPUS_ID,
    campusId
  }
}
export function resetStudentForm() {
  return {
    type: RESET_STUDENT_FORM,
    initialState
  }
}

// SUB-REDUCERS

export default function studentReducer(state = initialState, action) {
  switch (action.type) {
    case WRITE_FIRST_NAME:
      return Object.assign({}, state, { firstName: action.firstName })
    case WRITE_LAST_NAME:
      return Object.assign({}, state, { lastName: action.lastName })
    case WRITE_EMAIL:
      return Object.assign({}, state, { email: action.email })
    case WRITE_CAMPUS_ID:
      return Object.assign({}, state, { campusId: action.campusId })
    case RESET_STUDENT_FORM:
      return Object.assign({}, action.initialState)
    default:
      return state
  }
}
