import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import RideInformationCard from "./RideInformationCard";

export default function TripsScreen({ navigation, route }) {
  const [rides, setRides] = useState([
    {
      time: "8:15AM",
      location: "Bellevue Downtown",
      distance: 1,
      fee: 20,
      totalPositions: 3,
      available: 1,
    },
    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 1.2,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },
  ]);

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 20 }}>
      {rides.map((rideInfo, index) => (
        <RideInformationCard
          key={index}
          index={index}
          rideInfo={rideInfo}
          onPressed={() => {
            navigation.navigate("Trip Detail", {
              rideInfo: rideInfo,
              isDriver: route.params.isDriver,
              isToNEU: route.params.isToNEU,
            });
          }}
        />
      ))}
    </View>
  );
}
