const WRITE_STUDENT = "WRITE_STUDENT"

// ACTION CREATORS

export function writeStudent(student) {
  return {
    type: WRITE_STUDENT,
    student
  }
}

// SUB-REDUCERS

export default function studentReducer(state = "", action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.campuses
    default:
      return state
  }
}
