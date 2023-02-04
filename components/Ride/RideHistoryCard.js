import React, { useState } from "react";
import { Text, View, Pressable } from "react-native";

export default function RideHistoryCard(props) {
  const rideInfo = props.rideInfo;

  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
      }}
      onPress={props.onPressed}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Text>{props.index + 1}</Text>
      </View>
      <View>
        <Text>{`Date: ${rideInfo.date}`}</Text>
        <Text>{`Time: ${rideInfo.time}`}</Text>
        <Text>{`Location: ${rideInfo.location}`}</Text>
        <Text>{`Distance: ${rideInfo.distance} miles`}</Text>
        <Text>{`Fee: $${rideInfo.fee}`}</Text>
        <Text>{`Driver: ${rideInfo.driver}`}</Text>
      </View>
    </Pressable>
  );
}
