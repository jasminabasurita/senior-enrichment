import axios from "axios"

const GET_STUDENTS = "GET_STUDENTS"
const GET_STUDENT = "GET_STUDENT"

// ACTION CREATORS

export function getStudents(students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

export function getStudent(student) {
  return {
    type: GET_STUDENT,
    student
  }
}

// THUNK CREATORS

export function fetchStudents() {
  return function thunk(dispatch) {
    return axios
      .get("/api/students")
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios
      .post("/api/students", student)
      .then(res => res.data)
      .then(newStudent => {
        const action = getStudent(newStudent)
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

export function deleteStudent(studentId) {
  return function thunk(dispatch) {
    return axios
      .delete(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students)
        dispatch(action)
      })
      .catch(err => console.error(err))
  }
}

// SUB-REDUCERS

export default function campusesReducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case GET_STUDENT:
      return [...state, action.student]
    default:
      return state
  }
}
