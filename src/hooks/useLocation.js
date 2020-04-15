import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default callback => {
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
        callback(location);
      }
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [error];
};
