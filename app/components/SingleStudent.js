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
  return (
    <div>
      {student.imageUrl && <img src={student.imageUrl} />}
    </div>
  )
}

const Container = connect(mapStateToProps)(SingleStudent)
export default Container
