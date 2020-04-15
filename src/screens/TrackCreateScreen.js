import "../_mockLocation";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import {
  requestPermissionsAsync,
  watchPositionAsync,
  Accuracy
} from "expo-location";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [error, setError] = useState(null);

  const startWatching = async () => {
    let { status } = await requestPermissionsAsync();
    if (status !== "granted") {
      setError("Please allow location permission to use the app");
    } else {
      setError(null);
    }
    await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10
      },
      location => {
        // update the state with the new location object
        addLocation(location);
      }
    );
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
