import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import React from "react"

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}
function AllCampuses(props) {
  return (
    <div>
      <div className="add">
        <NavLink to="/campuses/campusForm">Add a Campus</NavLink>
      </div>
      <h2>Campuses</h2>
      {props.campuses.map(campus => {
        return (
          <NavLink to={`/campuses/${campus.id}`} key={campus.id}>
            <div className="campusItem">
              <img src={campus.imageUrl} />
              <h4>{campus.name}</h4>
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

const Container = connect(mapStateToProps)(AllCampuses)
export default Container
