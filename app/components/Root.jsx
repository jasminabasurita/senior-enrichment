import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import Navbar from "./Navbar"
import Home from "./Home"
import AllCampuses from "./AllCampuses"
import AllStudents from "./AllStudents"
import SingleCampus from "./SingleCampus"
import SingleStudent from "./SingleStudent"
import StudentForm from "./StudentForm"
import CampusForm from "./CampusForm.js"
import UpdateCampus from "./UpdateCampus"
import UpdateStudent from "./UpdateStudent"
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
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/campuses" component={AllCampuses} />
        <Route exact path="/campuses/campusForm" component={CampusForm} />
        <Route exact path="/students" component={AllStudents} />
        <Route exact path="/students/studentForm" component={StudentForm} />
        <Route exact path="/campuses/:campusId" component={SingleCampus} />
        <Route exact path="/campuses/:campusId/campusUpdate" component={UpdateCampus} />
        <Route exact path="/students/:studentId" component={SingleStudent} />
        <Route exact path="/students/:studentId/studentUpdate" component={UpdateStudent} />
        <Redirect to="/" />
      </Switch>
      </div>
    )
  }
}
