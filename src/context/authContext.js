import createDataContext from "./createDataContext";

// reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// action functions

export const { Provider, Context } = createDataContext(
  authReducer,
  {},
  { isSignedIn: false }
);
