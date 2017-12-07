import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import React from "react"

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}
function AllCampuses(props) {
  console.log(props)
  return (
    <div>
      <h3>Campuses</h3>
      {props.campuses.map(campus => {
        console.log(campus)
        return (
          <NavLink to={`/campuses/${campus.id}`}  key={campus.id}>
            <div>
              <h5>{campus.name}</h5>
              <img src={campus.imageUrl} />
            </div>
          </NavLink>
        )
      })}
    </div>
  )
}

const Container = connect(mapStateToProps)(AllCampuses)
export default Container
