import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RideScreen from "./RideScreen";
import RideHistoryScreen from "./RideDetailHistoryScreen";

const Stack = createNativeStackNavigator();

export default function RideNavigator() {
  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <Stack.Screen name="Ride History" component={RideScreen} />
      <Stack.Screen name="Ride History Detail" component={RideHistoryScreen} />
    </Stack.Navigator>
  );
}
