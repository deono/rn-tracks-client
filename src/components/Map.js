import React from "react";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  let points = [];
  for (let i = 0; i < 20; i++) {
    points.push({
      latitude: 52.051051 + i * 0.001,
      longitude: -0.734903 + i * 0.001
    });
  }

  return (
    <View>
      <MapView
        style={styles.mapStyles}
        initialRegion={{
          latitude: 52.051051,
          longitude: -0.734903,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
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
