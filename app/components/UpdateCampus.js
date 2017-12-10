import React, { Component } from "react"
import { updateCampus } from "../reducers"
import { connect } from "react-redux"

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleSubmit: (event, state) => {
      event.preventDefault()
      let updatedCampus = {}
      if (state.name) updatedCampus.name = state.name
      if (state.imageUrl) updatedCampus.imageUrl = state.imageUrl
      if (state.description) {
        updatedCampus.description = state.description
      }

      const campusId = ownProps.match.params.campusId
      dispatch(updateCampus(updatedCampus, campusId))
      ownProps.history.push(`/campuses/${campusId}`)
    }
  }
}
class UpdateCampus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      imageUrl: "",
      description: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div id="form">
        <form onSubmit={event => this.props.handleSubmit(event, this.state)}>
          <div className="textField">
            <label>Update Name: </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Campus Name..."
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="textField">
            <label>Update Image Url: </label>
            <input
              type="text"
              name="imageUrl"
              placeholder="Enter Image Url..."
              onChange={this.handleChange}
              value={this.state.imageUrl}
            />
          </div>
          <div className="textField">
            <label>Update Description: </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Campus Description..."
              onChange={this.handleChange}
              value={this.state.description}
            />
          </div>
          <button className="add">Submit</button>
        </form>
      </div>
    )
  }
}
const Container = connect(null, mapDispatchToProps)(UpdateCampus)
export default Container
