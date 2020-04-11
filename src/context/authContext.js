import createDataContext from "./createDataContext";
import trackerApi from "../api/trackerApi";

// types
const ADD_ERROR = "ADD_ERROR";

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case ADD_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

// action functions
const signup = dispatch => {
  return async ({ email, password }) => {
    try {
      // make an api request to /signup with email and password
      const response = await trackerApi.post("/signup", { email, password });
      // success -modify the state to indicate the user is authenticated
      console.log("response", response.data);
    } catch (error) {
      // failure - handle signup failures
      console.log(error.response.data);
      dispatch({
        type: ADD_ERROR,
        payload: error.response.data.message
      });
    }
  };
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
