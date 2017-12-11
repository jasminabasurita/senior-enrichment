import { connect } from "react-redux"
import React from "react"
import {
  writeNewCampus,
  postCampus,
  resetCampusForm
} from "../reducers"

const mapStateToProps = state => {
  return {
    newCampus: state.newCampus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange: event => {
      dispatch(writeNewCampus({[event.target.name]: event.target.value}))
    },
    handleSubmit: (event, newCampus) => {
      event.preventDefault()
      dispatch(postCampus(newCampus))
      dispatch(resetCampusForm())
      ownProps.history.push("/campuses")
    }
  }
}

function CampusForm(props) {
  return (
    <div id="form">
      <form onSubmit={event => props.handleSubmit(event, props.newCampus)}>
        <div className="textField">
          <label>Campus Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Campus Name..."
            onChange={props.handleChange}
            value={props.newCampus.name}
          />
        </div>
        <div className="textField">
          <label>Image Url: </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter Image Url..."
            onChange={props.handleChange}
            value={props.newCampus.imageUrl}
          />
        </div>
        <div className="textField">
          <label>Campus Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Campus Description..."
            onChange={props.handleChange}
            value={props.newCampus.description}
          />
        </div>
        <button className="add">Submit</button>
      </form>
    </div>
  )
}
const Container = connect(mapStateToProps, mapDispatchToProps)(CampusForm)
export default Container
