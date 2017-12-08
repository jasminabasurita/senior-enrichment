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
      <div id="content">
        <h2>Campuses</h2>
        <div id="allCampusView">
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
      </div>
    </div>
  )
}

const Container = connect(mapStateToProps)(AllCampuses)
export default Container
