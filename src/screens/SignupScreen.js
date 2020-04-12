import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Context as AuthContext } from "../context/authContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign up for Tracker"
        message={state.message}
        buttonText="Sign up"
        onSubmit={signup}
      />
      <NavLink
        text="Already have an account? Sign in instead."
        routeName="Signin"
      />
    </View>
  );
};

SignupScreen.navigationOptions = {
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

export default SignupScreen;
