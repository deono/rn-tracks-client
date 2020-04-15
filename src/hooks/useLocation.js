import { useState, useEffect } from "react";
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default (shouldTrack, callback) => {
  const [error, setError] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    let { status } = await requestPermissionsAsync();
    if (status !== "granted") {
      setError("Please allow location permission to use the app");
    } else {
      setError(null);
    }
    const sub = await watchPositionAsync(
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
    setSubscriber(sub);
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      // stop watching
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [error];
};
