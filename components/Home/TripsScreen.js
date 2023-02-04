import React, { useState } from "react";
import { ScrollView, View, Button, Text } from "react-native";
import RideCard from "../RideCard";

export default function TripsScreen({ navigation, route }) {
  const [rides, setRides] = useState([
    {
      date: "Feb 4",
      time: "8:15AM",
      location: "Bellevue Downtown",
      distance: 0.5,
      fee: 0,
      totalPositions: 3,
      available: 1,
      driver: "Benjamin",
      verifiedDriver: true,
    },
    {
      date: "Feb 4",
      time: "8:20 PM",
      location: "Bellevue Downtown",
      distance: 0.3,
      fee: 15,
      totalPositions: 3,
      available: 2,
      driver: "John",
      verifiedDriver: false,
    },

    {
      date: "Feb 3",
      time: "6:20 PM",
      location: "Bellevue Downtown",
      distance: 0.8,
      fee: 20,
      totalPositions: 3,
      available: 3,
      driver: "Bill",
      verifiedDriver: true,
    },
    {
      date: "Feb 3",
      time: "12:20 PM",
      location: "Bellevue Downtown",
      distance: 1.0,
      fee: 0,
      totalPositions: 3,
      available: 1,
      driver: "Jack",
      verifiedDriver: true,
    },
    {
      date: "Feb 4",
      time: "12:23 PM",
      location: "Bellevue Downtown",
      distance: 0.1,
      fee: 0,
      totalPositions: 3,
      available: 1,
      driver: "Julie",
      verifiedDriver: false,
    },
    {
      date: "Feb 5",
      time: "7:20 AM",
      location: "Bellevue Downtown",
      distance: 0.7,
      fee: 15,
      totalPositions: 3,
      available: 2,
      driver: "Rachel",
      verifiedDriver: true,
    },
  ]);

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={{ justifyContent: "center", marginHorizontal: 50 }}>
        <Text style={{ marginBottom: 10, margin: "auto" }}>
          {"Trip within 1 miles"}
        </Text>
        {rides
          .sort((a, b) => (a.distance > b.distance ? 1 : -1))
          .map((rideInfo, index) => (
            <RideCard
              key={index}
              index={index}
              rideInfo={rideInfo}
              type={"rideSearch"}
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
