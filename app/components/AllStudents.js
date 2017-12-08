import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import React from "react"
import { deleteStudent } from "../reducers"

const mapDispatchToProps = dispatch => {
  return {
    handleDelete: event => {
      dispatch(deleteStudent(event.target.value))
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  }
}
function AllStudents(props) {
  return (
    <div>
      <div className="add">
        <NavLink to="/students/studentForm">Enroll Today</NavLink>
      </div>
      <div id="content">
        <div className="studentList">
          <div className="column">
            <h3>Students</h3>
          </div>
          <div className="column">
            <h3>Campus</h3>
          </div>
          <div className="column">
            <h3>Remove</h3>
          </div>
        </div>
        {props.students.map(student => {
          return (
            <div key={student.id} className="studentList">
              <NavLink to={`/students/${student.id}`} className="column">
                  <h5>{student.name}</h5>
              </NavLink>
              <div className="column">
                <h5>
                  {
                    props.campuses.find(
                      campus => campus.id === student.campusId
                    ).name
                  }
                </h5>
              </div>
              <div className="column">
                <button value={student.id} onClick={props.handleDelete}>
                  <img src="/remove.png" />
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const Container = connect(mapStateToProps, mapDispatchToProps)(AllStudents)
export default Container
