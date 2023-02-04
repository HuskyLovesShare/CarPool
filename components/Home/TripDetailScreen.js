import React from "react";
import { View, Button, Text } from "react-native";

export default function TripDetailScreen({ navigation, route }) {
  console.log(route);
  const rideInfo = route.params.rideInfo;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.isToNEU ? "is to NEU" : "is Leave NEU"}</Text>
      <Text>
        {route.params.isDriver ? "is Driver: true" : "is Driver: false"}
      </Text>
      <Text>{"TripDetailScreen"}</Text>
      <Text>{`Time: ${rideInfo.time}`}</Text>
      <Text>{`Location: ${rideInfo.location}`}</Text>
      <Text>{`Distance: ${rideInfo.distance} miles`}</Text>
      <Text>{`Fee: $${rideInfo.fee}`}</Text>
      <Text>{`Available: ${rideInfo.available}/${rideInfo.totalPositions}`}</Text>
    </View>
  );
}
