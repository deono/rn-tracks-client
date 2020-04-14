import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 52.0406 + i * 0.001,
      longitude: 0.7594 + i * 0.001
    });
  }

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
      >
        <Polyline coordinates={points} />
      </MapView>
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
