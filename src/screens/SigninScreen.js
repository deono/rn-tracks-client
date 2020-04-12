import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign in to Tracker"
        message={state.message}
        buttonText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an account? Sign up instead."
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  headerShown: false
};

const styles = StyleSheet.create({
  //styles
  container: {
    marginHorizontal: 20,
    marginBottom: 50,
    flex: 1,
    justifyContent: "center"
  }
});

export default SigninScreen;
