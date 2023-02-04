import React from "react";
import { View, Button, Text } from "react-native";

export default function RideDetailHistoryScreen({ navigation, route }) {
  const rideInfo = route.params.rideInfo;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"TripDetailScreen"}</Text>
      <Text>{`Time: ${rideInfo.time}`}</Text>
      <Text>{`Location: ${rideInfo.location}`}</Text>
      <Text>{`Distance: ${rideInfo.distance} miles`}</Text>
      <Text>{`Fee: $${rideInfo.fee}`}</Text>
      <Text>{`Available: ${rideInfo.available}/${rideInfo.totalPositions}`}</Text>
      <Button title={"Join"} onPress={() => navigation.popToTop()} />
    </View>
  );
}
