import createDataContext from "./createDataContext";
import { createElement } from "react-native";

// types
const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";

// reducer
const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    default:
      return state;
  }
};

// actions
const startRecording = dispatch => () => {
  // start recording
};
const stopRecording = dispatch => () => {
  // stop recording
};
const addLocation = dispatch => location => {
  // add a location
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location
  });
};

// call createDataContext with reducer, action functions and initial state
export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
