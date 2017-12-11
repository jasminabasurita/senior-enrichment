const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  gpa: "",
  campusId: 0
}

//

const WRITE_NEW_STUDENT = "WRITE_NEW_STUDENT"
const RESET_STUDENT_FORM = "RESET_STUDENT_FORM"

// ACTION CREATORS

export function writeStudentForm(newStudent) {
  return {
    type: WRITE_NEW_STUDENT,
    newStudent
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
    case WRITE_NEW_STUDENT:
      return Object.assign({}, state, action.newStudent)
    case RESET_STUDENT_FORM:
      return Object.assign({}, action.initialState)
    default:
      return state
  }
}
