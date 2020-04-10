import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text h3>Sign Up for Tracker</Text>
      <Input
        value={email}
        onChangeText={setEmail}
        label="Email"
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<Icon name="email" size={24} color="gray" />}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={<Icon name="lock" size={24} color="gray" />}
      />
      <Button title="Sign Up" onPress={() => signup({ email, password })} />
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
