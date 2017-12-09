import React, { Component } from "react"
import { updateStudent } from "../reducers"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (event, state) => {
      event.preventDefault()
      let updatedStudent = {}
      if (state.firstName) updatedStudent.firstName = state.firstName
      if (state.lastName) updatedStudent.lastName = state.lastName
      if (state.email) updatedStudent.email = state.email
      if (state.gpa) updatedStudent.gpa = state.gpa
      if (state.campusId) updatedStudent.campusId = state.campusId

      const studentId = ownProps.match.params.studentId
      dispatch(updateStudent(updatedStudent, studentId))
      ownProps.history.push(`/students/${studentId}`)
    }
  }
}
class UpdateStudent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: "",
      campusId: 0
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleGpa = this.handleGpa.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleCampus = this.handleCampus.bind(this)
  }

  handleFirstName(event) {
    this.setState({ firstName: event.target.value })
  }
  handleLastName(event) {
    this.setState({ lastName: event.target.value })
  }
  handleGpa(event) {
    this.setState({ gpa: event.target.value })
  }
  handleEmail(event) {
    this.setState({ email: event.target.value })
  }
  handleCampus(event) {
    console.log(event.target.value)
    this.setState({ campusId: event.target.value })
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <div className="textField">
            <label>Update First Name: </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name..."
              onChange={this.handleFirstName}
              value={this.state.firstName}
            />
          </div>
          <div className="textField">
            <label>Update Last Name: </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name..."
              onChange={this.handleLastName}
              value={this.state.lastName}
            />
          </div>
          <div className="textField">
            <label>Update Email: </label>
            <input
              type="text"
              name="email"
              placeholder="Enter Email..."
              onChange={this.handleImage}
              value={this.state.imageUrl}
            />
          </div>
          <div className="textField">
            <label>Update GPA: </label>
            <input
              type="text"
              name="gpa"
              placeholder="Enter GPA..."
              onChange={this.handleGpa}
              value={this.state.gpa}
            />
          </div>
          <div>
            <label>Update Campus: </label>
            <select onChange={this.handleCampus} value={this.state.campusId}>
              <option value="0" disabled>
                Select a Campus...
              </option>
              {this.props.campuses.map(campus => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </div>
          <button className="add">Submit</button>
        </form>
      </div>
    )
  }
}
const Container = connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)
export default Container
