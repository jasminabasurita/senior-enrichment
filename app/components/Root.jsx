import React, { Component } from "react"
import { Route } from "react-router-dom"
import Navbar from "./Navbar"
import AllCampuses from "./AllCampuses"
import AllStudents from "./AllStudents"
import SingleCampus from "./SingleCampus"
import SingleStudent from "./SingleStudent"
import store from "../store"
import {fetchCampuses, fetchStudents} from "../reducers"

export default class Root extends Component {
  componentDidMount(){
    const studentsThunk = fetchStudents()
    const campusesThunk = fetchCampuses()
    store.dispatch(studentsThunk)
    store.dispatch(campusesThunk)
  }
  render() {
    return (
      <div>
        <Navbar />
        <Route exact path="/campuses" component={AllCampuses} />
        <Route exact path="/students" component={AllStudents} />
        <Route exact path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/students/:studentId" component={SingleStudent} />
      </div>
    )
  }
}
