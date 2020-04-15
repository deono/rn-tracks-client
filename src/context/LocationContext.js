import createDataContext from "./createDataContext";
import { createElement } from "react-native";

// reducer
const locationReducer = (state, action) => {
  switch (action.type) {
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
const addLocation = dispatch => () => {
  // add a location
};

// call createDataContext with reducer, action functions and initial state
export const { Contex, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
);
