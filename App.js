import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { setNavigator } from "./src/navigationRef";

// screens
import AccountScreen from "./src/screens/AccountScreen";
import SignupScreen from "./src/screens/SignupScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";

// context
import { Provider as AuthProvider } from "./src/context/authContext";

// theming
import { ThemeProvider } from "react-native-elements";

const theme = {
  Text: {
    h3Style: {
      color: "green",
      marginTop: 30,
      marginBottom: 10
    }
  },
  Input: {
    containerStyle: {
      marginVertical: 10,
      marginLeft: 0,
      paddingLeft: 0
    }
  },
  Button: {
    containerStyle: {
      marginVertical: 10
    },
    buttonStyle: {
      backgroundColor: "green"
    },
    raised: true
  }
};

const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

// the ref prop in app is a function that gets called with
// the navigator object. Acts like a hook into the navigator
// to be used outside a React component.
export default () => {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <App
          ref={navigator => {
            setNavigator(navigator);
          }}
        />
      </ThemeProvider>
    </AuthProvider>
  );
};
