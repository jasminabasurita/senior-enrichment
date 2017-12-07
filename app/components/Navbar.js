import { NavLink } from "react-router-dom"
import React from "react"

export default function Navbar() {
  return (
    <div className="navbar">
      <div>
        <h1>Galactacademy</h1>
      </div>
      <div id="navButtons">
        <NavLink
          to="/campuses"
          className="navButton"
          activeClassName="activeNav"
        >
          CAMPUSES
        </NavLink>
        <NavLink
          to="/students"
          className="navButton"
          activeClassName="activeNav"
        >
          STUDENTS
        </NavLink>
      </div>
    </div>
  )
}
