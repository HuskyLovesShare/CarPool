import React from "react";
import { View, Button, Text } from "react-native";
import { useState } from "react/cjs/react.production.min";

export default function TripsScreen({ navigation, route }) {
  //   const [rides, setRides] = useState();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"Trips"}</Text>
    </View>
  );
}
