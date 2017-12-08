import { connect } from "react-redux"
import React from "react"
import {
  writeFirstName,
  writeLastName,
  writeEmail,
  writeCampusId,
  postStudent,
  resetStudentForm
} from "../reducers"

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    newStudent: state.newStudent
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFirst: event => {
      dispatch(writeFirstName(event.target.value))
    },
    handleLast: event => {
      dispatch(writeLastName(event.target.value))
    },
    handleEmail: event => {
      dispatch(writeEmail(event.target.value))
    },
    handleCampusId: event => {
      dispatch(writeCampusId(event.target.value))
    },
    handleSubmit: (event, newStudent) => {
      event.preventDefault()
      dispatch(postStudent(newStudent))
      dispatch(resetStudentForm())
    }
  }
}

function StudentForm(props) {
  return (
    <div>
      <div id="form">
        <form onSubmit={event => props.handleSubmit(event, props.newStudent)}>
          <div className="textField">
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name..."
              onChange={props.handleFirst}
              value={props.newStudent.firstName}
            />
          </div>
          <div className="textField">
            <label>Last Name: </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name..."
              onChange={props.handleLast}
              value={props.newStudent.lastName}
            />
          </div>
          <div className="textField">
            <label>Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email..."
              onChange={props.handleEmail}
              value={props.newStudent.email}
            />
          </div>
          <div>
            <label>Campus: </label>
            <select
              onChange={props.handleCampusId}
              value={props.newStudent.campusId}
            >
              {props.campuses.map(campus => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}
const Container = connect(mapStateToProps, mapDispatchToProps)(StudentForm)
export default Container
