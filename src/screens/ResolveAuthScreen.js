import React, { useEffect, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as AuthContext } from "../context/authContext";

const ResolveAuthScreen = () => {
  const { tryLocalSignin } = useContext(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <Text h3>Tracker</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  container: {
    marginHorizontal: 20,
    marginBottom: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ResolveAuthScreen;
