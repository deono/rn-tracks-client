import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Context as AuthContext } from "../context/authContext";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
      <Text h3>Account</Text>
      <Button title="Sign Out" onPress={signout} />
    </SafeAreaView>
  );
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

export default AccountScreen;
