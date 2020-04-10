import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button, ThemeProvider } from "react-native-elements";

const theme = {
  Text: {
    h3Style: {
      color: "green",
      marginTop: 20,
      marginBottom: 10
    }
  },
  Input: {
    containerStyle: {
      marginVertical: 10
    }
  },
  Button: {
    containerStyle: {
      marginVertical: 30
    },
    buttonStyle: {
      backgroundColor: "green"
    },
    raised: true
  }
};

const SignupScreen = ({ navigation }) => {
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <View>
          <Text h3>Sign Up for Tracker</Text>
          <Input
            label="Email"
            leftIcon={<Icon name="email" size={24} color="gray" />}
          />
          <Input
            label="Password"
            leftIcon={<Icon name="lock" size={24} color="gray" />}
          />
          <Button title="Sign Up" />
        </View>
      </View>
    </ThemeProvider>
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
