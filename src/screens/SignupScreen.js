import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SignupScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Sign up Screen</Text>
      <Button
        title="Go to Signin"
        onPress={() => {
          navigation.navigate("Signin");
        }}
      />
      <Button
        title="Go to main flow"
        onPress={() => {
          navigation.navigate("mainFlow");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
});

export default SignupScreen;
