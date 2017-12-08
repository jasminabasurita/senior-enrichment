import { connect } from "react-redux"
import React from "react"
import {
  writeCampusName,
  writeImageUrl,
  writeDescription,
  postCampus,
  resetCampusForm
} from "../reducers"

const mapStateToProps = state => {
  return {
    newCampus: state.newCampus
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleCampusName: event => {
      dispatch(writeCampusName(event.target.value))
    },
    handleImage: event => {
      dispatch(writeImageUrl(event.target.value))
    },
    handleDescription: event => {
      dispatch(writeDescription(event.target.value))
    },
    handleSubmit: (event, newCampus) => {
      event.preventDefault()
      dispatch(postCampus(newCampus))
      dispatch(resetCampusForm())
    }
  }
}

function CampusForm(props) {
  return (
    <div>
      <form onSubmit={event => props.handleSubmit(event, props.newCampus)}>
        <div className="textField">
          <label>Campus Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Enter Campus Name..."
            onChange={props.handleCampusName}
            value={props.newCampus.name}
          />
        </div>
        <div className="textField">
          <label>Image Url: </label>
          <input
            type="text"
            name="imageUrl"
            placeholder="Enter Image Url..."
            onChange={props.handleImage}
            value={props.newCampus.imageUrl}
          />
        </div>
        <div className="textField">
          <label>Campus Description: </label>
          <input
            type="text"
            name="description"
            placeholder="Enter Campus Description..."
            onChange={props.handleDescription}
            value={props.newCampus.description}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
const Container = connect(mapStateToProps, mapDispatchToProps)(CampusForm)
export default Container
