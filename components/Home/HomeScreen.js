import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ChooseIdentityScreen from "./ChooseIdentityScreen";
import ChooseDirectionScreen from "./ChooseDirectionScreen";
import NewTripScreen from "./NewTripScreen";
import ChooseMoreInfoScreen from "./ChooseMoreInfoScreen";
import TripsScreen from "./TripsScreen";
import TripDetailScreen from "./TripDetailScreen";

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
      {/* <Stack.Screen name="Trips" component={TripsScreen} /> */}

      <Stack.Screen
        name="Home"
        component={ChooseIdentityScreen}
        initialParams={{
          isDriver: isDriver,
          setIsDriver: () => {
            setIsDriver(true);
          },
          setIsRider: () => {
            setIsDriver(false);
          },
        }}
      />
      <Stack.Screen
        name="Direction"
        component={ChooseDirectionScreen}
        initialParams={{
          isDriver: isDriver,
          setIsToNEU: setIsToNEU,
        }}
      />
      <Stack.Screen
        name="More Information"
        component={ChooseMoreInfoScreen}
        initialParams={{
          isDriver: isDriver,
          setIsToNEU: setIsToNEU,
          isToNEU: isToNEU,
        }}
      />
      <Stack.Screen name="Trips" component={TripsScreen} />
      <Stack.Screen
        name="New Trip"
        component={NewTripScreen}
        initialParams={{
          isDriver: isDriver,
          setIsToNEU: setIsToNEU,
          isToNEU: isToNEU,
        }}
      />
      <Stack.Screen
        name="Trip Detail"
        component={TripDetailScreen}
        initialParams={{
          isDriver: isDriver,
          isToNEU: isToNEU,
        }}
      />
    </Stack.Navigator>
  );
}
