import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const SingleStudent = props => {
  const studentId = +props.match.params.studentId
  const student = props.students.length
    ? props.students.find(foundStudent => foundStudent.id === studentId)
    : {}
  const campus = props.campuses.length
    ? props.campuses.find(foundCampus => foundCampus.id === student.campusId)
    : {}
  return (
    <div>
      <div className="add">
        <NavLink to={`/students/${studentId}/studentUpdate`}>
          Update Student
        </NavLink>
      </div>
      <div id="content">
        <h2>{student.name}</h2>
        <h5>Student Email: {student.email}</h5>
        <h5>Student GPA: {student.gpa}</h5>
        <h5>
          Student Campus:{" "}
          {!!campus && (
            <NavLink to={`/campuses/${campus.id}`} className="linkBtn">
              {" "}
              {campus.name}
            </NavLink>
          )}
        </h5>
      </div>
    </div>
  )
}

const Container = connect(mapStateToProps)(SingleStudent)
export default Container
