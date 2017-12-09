import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import { deleteCampus, updateStudent } from "../reducers"

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleDelete: event => {
      event.preventDefault()
      dispatch(deleteCampus(+ownProps.match.params.campusId))
      ownProps.history.push("/campuses")
    },
    handleRemove: event => {
      event.preventDefault()
      dispatch(updateStudent({ campusId: null }, event.target.value))
    }
  }
}

function SingleCampus(props) {
  const campusId = +props.match.params.campusId
  const campus = props.campuses.length
    ? props.campuses.find(foundCampus => foundCampus.id === campusId)
    : {}
  return (
    <div>
      <div className="add">
        <NavLink to={`/campuses/${campusId}/campusUpdate`}>
          Update Campus
        </NavLink>
      </div>
      <div id="content">
        <div id="campusHeader">
          <h2>{campus.name}</h2>
          <button onClick={props.handleDelete} className="delete">
            Delete Campus
          </button>
        </div>
        <div id="campusImage">
          <img src={campus.imageUrl} />
        </div>
        <h3>Description: </h3>
        <p>{campus.description}</p>
        <h3>Students: </h3>
        {props.students
          .filter(student => student.campusId === campusId)
          .map(student => (
            <div key={student.id} className="studentList">
              <h5>
                <NavLink to={`/students/${student.id}`} className="linkBtn">
                  {student.name}
                </NavLink>
              </h5>
              <button value={student.id} onClick={props.handleRemove}>
                <img src="/remove.png" />
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
const Container = connect(mapStateToProps, mapDispatchToProps)(SingleCampus)
export default Container
