import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import React from "react"

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}
function AllStudents(props) {
  console.log(props)
  return (
    <div>
      <div className="studentList">
        <h3>Students</h3>
        <h3>Campus</h3>
        <h3>Remove</h3>
      </div>
      {props.students.map(student => {
        return (
          <div key={student.id} className="studentList">
            <h5>{student.name}</h5>
            <h5>
              {
                props.campuses.find(campus => campus.id === student.campusId)
                  .name
              }
            </h5>
            <button>
              <img src="/remove.png" />
            </button>
          </div>
        )
      })}
    </div>
  )
}

const Container = connect(mapStateToProps)(AllStudents)
export default Container
