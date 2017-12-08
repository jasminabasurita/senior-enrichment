const initialState = {
  name: "",
  imageUrl: "",
  description: ""
}

const WRITE_CAMPUS_NAME = "WRITE_CAMPUS_NAME"
const WRITE_IMAGE_URL = "WRITE_IMAGE_URL"
const WRITE_CAMPUS_DESCRIPTION = "WRITE_CAMPUS_DESCRIPTION"
const RESET_CAMPUS_FORM = "RESET_CAMPUS_FORM"

// ACTION CREATORS

export function writeCampusName(name) {
  return {
    type: WRITE_CAMPUS_NAME,
    name
  }
}

export function writeImageUrl(imageUrl) {
  return {
    type: WRITE_IMAGE_URL,
    imageUrl
  }
}

export function writeDescription(description) {
  return {
    type: WRITE_CAMPUS_DESCRIPTION,
    description
  }
}

export function resetCampusForm() {
  return {
    type: RESET_CAMPUS_FORM,
    initialState
  }
}

// SUB REDUCER
export default function newCampus(state = initialState, action) {
  switch (action.type) {
    case WRITE_CAMPUS_NAME:
      return Object.assign({}, state, { name: action.name })
    case WRITE_IMAGE_URL:
      return Object.assign({}, state, { imageUrl: action.imageUrl })
    case WRITE_CAMPUS_DESCRIPTION:
      return Object.assign({}, state, { description: action.description })
    case RESET_CAMPUS_FORM:
      return Object.assign({}, action.initialState)
    default:
      return state
  }
}
