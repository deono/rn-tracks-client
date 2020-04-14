import "../_mockLocation";
import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { requestPermissionsAsync } from "expo-location";
import Map from "../components/Map";

const TrackCreateScreen = () => {
  const [error, setError] = useState(null);

  const startWatching = async () => {
    let { status } = await requestPermissionsAsync();
    if (status !== "granted") {
      setError("Please allow location permission to use the app");
    } else {
      setError(null);
    }
  };

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2>Create a Track</Text>
      <Map />
      {error ? <Text>{error}</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  //styles
});

export default TrackCreateScreen;
