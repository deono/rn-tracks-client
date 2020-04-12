import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Text style={styles.linkStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyles: {
    marginTop: 10,
    color: "blue",
    textDecorationLine: "underline"
  }
});

export default withNavigation(NavLink);
