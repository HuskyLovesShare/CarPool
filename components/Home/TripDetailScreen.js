import React from "react";
import Map from "../Map";

export default function TripDetailScreen({ navigation, route }) {
  const rideInfo = route.params.rideInfo;
  return <Map />;
}
