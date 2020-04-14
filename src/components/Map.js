import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";

const Map = () => {
  return (
    <View>
      <MapView
        style={styles.mapStyles}
        initialRegion={{
          latitude: 52.0406,
          longitude: 0.7594,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  // styles
  mapStyles: {
    height: 300
  }
});

export default Map;
