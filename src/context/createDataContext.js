import React, { useReducer } from "react";

// three things that need to be customised:
// - the reducer function that updates the state
// - actions object containing callback functions to update the state object
// - the initial state object
export default (reducer, actions, defaultState) => {
  // create the contect object
  const Context = React.createContext();

  // set up the Provider function that takes a children prop
  const Provider = ({ children }) => {
    // call useReducer with the reducer function and the intitial state
    const [state, dispatch] = useReducer(reducer, defaultState);

    /**
     * Call each action in the actions object with the
     * dispatch function as an argument. This will return a
     * function, that will be passed down to the value prop,
     * which can be used to update the state object.
     */
    const boundActions = {};
    // e.g. actions === { addBlogPost: (dispatch) => return () => {} }
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      // any data to share with the rest of the application
      // is available on the value prop of Context.Provider
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
