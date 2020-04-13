import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

// types
const CLEAR_AUTH_MESSAGE = "CLEAR_AUTH_MESSAGE";

const SIGNUP_ERROR = "SIGNUP_ERROR";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

const SIGNIN_ERROR = "SIGNIN_ERROR";
const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case CLEAR_AUTH_MESSAGE:
      return { ...state, message: "" };
    case SIGNIN_ERROR:
    case SIGNUP_ERROR:
      return { ...state, message: action.message };
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return { ...state, token: action.payload, message: action.message };
    default:
      return state;
  }
};

const clearAuthMessage = dispatch => () => {
  dispatch({
    type: CLEAR_AUTH_MESSAGE
  });
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: token
    });
    navigate("TrackList");
  } else {
    navigate("Signup");
  }
};

// action functions
const signup = dispatch => async ({ email, password }) => {
  try {
    // make an api request to /signup with email and password
    const response = await trackerApi.post("/signup", { email, password });
    // success case
    // save the token in local storage
    console.log("token", response.data.payload);
    await AsyncStorage.setItem("token", response.data.payload);
    // store the token in the state object
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: response.data.payload,
      message: response.data.message
    });
    // navigate to the main flow
    navigate("TrackList");
  } catch (error) {
    // failure case - handle signup failures
    console.log(error.response.data.message);
    dispatch({
      type: SIGNUP_ERROR,
      message: error.response.data.message
    });
  }
};

const signin = dispatch => async ({ email, password }) => {
  try {
    // make api request
    const response = await trackerApi.post("/signin", { email, password });
    console.log("token", response.data.payload);
    // save the token in local storage
    await AsyncStorage.setItem("token", response.data.payload);
    // success - store the token in state
    dispatch({
      type: SIGNIN_SUCCESS,
      payload: response.data.payload
    });
    // navigate to the main flow
    navigate("TrackList");
  } catch (error) {
    // failure - handle failure
    console.log("signin error", error.response.data.message);
    dispatch({
      type: SIGNIN_ERROR,
      message: error.response.data.message
    });
  }
};

const signout = dispatch => {
  return () => {
    // sign the user out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, clearAuthMessage, signin, signout, signup },
  { token: null, message: "", loading: false }
);
