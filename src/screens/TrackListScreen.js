import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from "react-native-elements";

const TrackListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text h3>Track List Screen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => {
          navigation.navigate("TrackDetail");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  //styles
  container: {
    marginHorizontal: 20
  }
});

export default TrackListScreen;
