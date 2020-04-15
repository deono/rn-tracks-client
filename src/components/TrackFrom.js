import React from "react";
import { View, StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";

const TrackFrom = () => {
  //
  return (
    <View style={styles.container}>
      <Input placeholder="Enter track name" />
      <Button title="Start Recording" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  }
});

export default TrackFrom;
