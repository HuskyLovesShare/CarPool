import React, { useState } from "react";
import {ScrollView, Text, View} from "react-native";
import RideHistoryCard from "./RideHistoryCard";

export default function RideScreen({ navigation, route }) {
  const [rides, setRides] = useState([
    {
      date: "2022-11-02",
      time: "08:15",
      location: "Bellevue Downtown",
      distance: 0.5,
      fee: 20,
      totalPositions: 3,
      driver: "Benjamin",
    },
    {
      date: "2022-08-12",
      time: "18:20",
      location: "Bellevue Downtown",
      distance: 0.3,
      fee: 15,
      totalPositions: 3,
      driver: "John",
    },

    {
      date: "2022-09-25",
      time: "14:20",
      location: "Bellevue Downtown",
      distance: 0.8,
      fee: 15,
      totalPositions: 3,
      driver: "Bill",
    },
    {
      date: "2021-04-30",
      time: "12:20",
      location: "Bellevue Downtown",
      distance: 1.0,
      fee: 15,
      totalPositions: 3,
      driver: "Jack",
    },
    {
      date: "2023-01-02",
      time: "00:23",
      location: "Bellevue Downtown",
      distance: 0.1,
      fee: 15,
      totalPositions: 3,
      driver: "Julie",
    },
    {
      date: "2022-12-22",
      time: "07:20",
      location: "Bellevue Downtown",
      distance: 0.7,
      fee: 15,
      totalPositions: 3,
      driver: "Rachel",
    },
  ]);

  return (
    <ScrollView style={{ marginTop: 20 }}>
      <View style={{ justifyContent: "center", marginHorizontal: 50 }}>
        {rides
          .sort((a, b) => (a.date > b.date ? 1 : (a.date < b.date ? -1 : a.date > b.date ? 1 : -1)))
          .map((rideInfo, index) => (
            <RideHistoryCard
              key={index}
              index={index}
              rideInfo={rideInfo}
              onPressed={() => {
                navigation.navigate("Ride History Detail", {
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
