import React from "react"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students
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
        <NavLink to={`/campuses/${campusId}/campusUpdate`}>Update Campus</NavLink>
      </div>
      <div id="content">
        <h2>{campus.name}</h2>
        <img src={campus.imageUrl} />
        <h3>Description: </h3>
        <p>{campus.description}</p>
        <h3>Students: </h3>
        {props.students
          .filter(student => student.campusId === campusId)
          .map(student => (
            <h5 key={student.id}>
              <NavLink to={`/students/${student.id}`} className="linkBtn">
                {student.name}
              </NavLink>
            </h5>
          ))}
      </div>
    </div>
  )
}
const Container = connect(mapStateToProps)(SingleCampus)
export default Container
