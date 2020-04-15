import createDataContext from "./createDataContext";
import { createElement } from "react-native";

// types
const ADD_CURRENT_LOCATION = "ADD_CURRENT_LOCATION";
const ADD_LOCATION = "ADD_LOCATION";

const START_RECORDING = "START_RECORDING";
const STOP_RECORDING = "STOP_RECORDING";

const CHANGE_NAME = "CHANGE_NAME";

// reducer
const locationReducer = (state, action) => {
  switch (action.type) {
    case ADD_CURRENT_LOCATION:
      return { ...state, currentLocation: action.payload };
    case ADD_LOCATION:
      return { ...state, locations: [...state.locations, action.payload] };
    case START_RECORDING:
      return { ...state, recording: true };
    case STOP_RECORDING:
      return { ...state, recording: false };
    case CHANGE_NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

// actions
const changeName = dispatch => name => {
  dispatch({
    type: CHANGE_NAME,
    payload: name
  });
};

const startRecording = dispatch => () => {
  // start recording
  dispatch({
    type: START_RECORDING
  });
};
const stopRecording = dispatch => () => {
  // stop recording
  dispatch({
    type: STOP_RECORDING
  });
};
const addLocation = dispatch => (location, recording) => {
  // add a location
  dispatch({
    type: ADD_CURRENT_LOCATION,
    payload: location
  });
  // add locations to locations array
  if (recording) {
    dispatch({
      type: ADD_LOCATION,
      payload: location
    });
  }
};

// call createDataContext with reducer, action functions and initial state
export const { Context, Provider } = createDataContext(
  locationReducer,
  { changeName, startRecording, stopRecording, addLocation },
  { name: "", recording: false, locations: [], currentLocation: null }
);
