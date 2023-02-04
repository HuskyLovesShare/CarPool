import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import RideCard from "../RideCard";

export default function RideScreen({ navigation, route }) {
  const [rides, setRides] = useState([
    {
      date: "Feb 4",
      time: "8:15AM",
      location: "Bellevue Square",
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
      location: "University of Washington",
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
      location: "Bellevue Square",
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
      location: "University of Washington",
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
        {rides
          .sort((a, b) =>
            a.date > b.date
              ? 1
              : a.date < b.date
              ? -1
              : a.date > b.date
              ? 1
              : -1
          )
          .map((rideInfo, index) => (
            <RideCard
              key={index}
              index={index}
              rideInfo={rideInfo}
              type={"rideHistory"}
              onPressed={() => {
                navigation.navigate("Ride History Detail", {
                  rideInfo: rideInfo,
                });
              }}
            />
          ))}
      </View>
    </ScrollView>
  );
}
