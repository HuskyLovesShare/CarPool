import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RideScreen from "../RideScreen";
import RideHistoryScreen from "../RideDetailHistoryScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const [isDriver, setIsDriver] = useState(true);
  const [isToNEU, setIsToNEU] = useState(true);

  return (
    <Stack.Navigator
      //   screenOptions={{
      //     headerShown: false,
      //   }}
    >
      <Stack.Screen
        name="Ride History"
        component={RideScreen}
        initialParams={{
          isDriver: isDriver,
          isToNEU: isToNEU,
          setIsDriver: () => {
            setIsDriver(true);
          },
          setIsRider: () => {
            setIsDriver(false);
          },
        }}
      />
      <Stack.Screen
        name="Ride History Detail"
        component={RideHistoryScreen}
        initialParams={{
          isDriver: isDriver,
          isToNEU: isToNEU,
        }}
      />
    </Stack.Navigator>
  );
}