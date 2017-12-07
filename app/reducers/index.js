import { combineReducers } from 'redux'
import students from './students'
import campuses from './campuses'
import newStudent from './newStudent'

const rootReducer = combineReducers({
  campuses,
  students,
  newStudent
})

export default rootReducer
export * from "./campuses.js"
export * from "./students.js"
export * from "./newStudent.js"
