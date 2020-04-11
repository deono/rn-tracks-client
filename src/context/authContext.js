import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";
import { AsyncStorage } from "react-native";
import { navigate } from "../navigationRef";

// types
const SIGNUP_ERROR = "SIGNUP_ERROR";
const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case SIGNUP_ERROR:
      return { ...state, message: action.message };
    case SIGNUP_SUCCESS:
      return { ...state, token: action.payload, message: action.message };
    default:
      return state;
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
      payload: response.data.token,
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

const signin = dispatch => {
  return ({ email, password }) => {
    // make api request
    // success - modify the state
    // failure - handle failure
  };
};

const signout = dispatch => {
  return () => {
    // sign the user out
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup },
  { isSignedIn: false, message: "" }
);
