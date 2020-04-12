import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialIcons";

const AuthForm = ({ headerText, message, onSubmit, buttonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Text h3>{headerText}</Text>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
        leftIcon={
          <Icon style={styles.iconStyles} name="email" size={24} color="gray" />
        }
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
        errorMessage={message}
        leftIcon={
          <Icon style={styles.iconStyles} name="lock" size={24} color="gray" />
        }
      />

      <Button
        title={buttonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};

const styles = StyleSheet.create({
  // styles
  iconStyles: {
    marginRight: 10
  }
});

export default AuthForm;
