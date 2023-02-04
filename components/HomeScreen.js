import * as React from "react";
import { Text, View } from "react-native";

import RideInformationCard from "./RideInformationCard";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <RideInformationCard />
    </View>
  );
}
