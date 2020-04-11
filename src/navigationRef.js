// trigger navigation from outside React components
import { NavigationActions } from "react-navigation";

let navigator;

// hooks into App to get access to navigation object
export const setNavigator = nav => {
  navigator = nav;
};

// import this function and call with the route to navigate to
export const navigate = (routeName, params) => {
  // change navigation state and show different screen
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};
