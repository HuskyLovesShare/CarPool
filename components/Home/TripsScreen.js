import React, { useState } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import RideInformationCard from "./RideInformationCard";

export default function TripsScreen({ navigation, route }) {
  const [rides, setRides] = useState([
    {
      time: "8:15AM",
      location: "Bellevue Downtown",
      distance: 0.5,
      fee: 20,
      totalPositions: 3,
      available: 1,
    },
    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 0.3,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },

    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 0.8,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },
    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 1.0,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },
    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 0.1,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },
    {
      time: "8:20AM",
      location: "Bellevue Downtown",
      distance: 0.7,
      fee: 15,
      totalPositions: 3,
      available: 2,
    },
  ]);

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={{ justifyContent: "center", marginHorizontal: 50 }}>
        <Text>{"Trip within 1 miles"}</Text>
        {rides
          .sort((a, b) => (a.distance > b.distance ? 1 : -1))
          .map((rideInfo, index) => (
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
    </ScrollView>
  );
}
