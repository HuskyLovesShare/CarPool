import React from "react";
import { View, Button, Text } from "react-native";

export default function NewTripScreen({ navigation, route }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.isToNEU ? "is to NEU" : "is Leave NEU"}</Text>
      <Text>
        {route.params.isDriver ? "is Driver: true" : "is Driver: false"}
      </Text>
      <Text>{"New Trip"}</Text>
    </View>
  );
}
