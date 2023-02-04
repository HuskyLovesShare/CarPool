import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View, StyleSheet, Pressable, Button } from "react-native";

// import RideInformationCard from "./RideInformationCard";
import MyButton from "./MyButton";

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  const [isDriver, setIsDriver] = useState(true);
  const [isToNEU, setIsToNEU] = useState(true);

  function ChooseIdentityScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Button
          title="Share"
          onPress={() => {
            setIsDriver(true);
            navigation.navigate("Direction");
          }}
        />
        <Button
          title="Find Share"
          onPress={() => {
            setIsDriver(false);
            navigation.navigate("Direction");
          }}
        />
      </View>
    );
  }

  function ChooseDirectionScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{isDriver ? "is Driver: true" : "is Driver: false"}</Text>
        <Button
          title="To NEU"
          onPress={() => {
            setIsToNEU(true);
            if (isDriver) {
              navigation.navigate("New Trip");
            } else {
              navigation.navigate("More Information");
            }
          }}
        />
        <Button
          title="Leave NEU"
          onPress={() => {
            setIsToNEU(false);
            if (isDriver) {
              navigation.navigate("New Trip");
            } else {
              navigation.navigate("More Information");
            }
          }}
        />
      </View>
    );
  }

  function ChooseMoreInfoScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{"Address"}</Text>
        <Text>{"Time"}</Text>
        <Button title="Continue" onPress={() => navigation.navigate("Trips")} />
      </View>
    );
  }

  function TripsScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{"Trips"}</Text>
      </View>
    );
  }

  function NewTripScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{isToNEU ? "is to NEU" : "is Leave NEU"}</Text>
        <Text>{"New Trip"}</Text>
      </View>
    );
  }

  return (
    <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    >
      <Stack.Screen name="Home" component={ChooseIdentityScreen} />
      <Stack.Screen name="Direction" component={ChooseDirectionScreen} />
      <Stack.Screen name="More Information" component={ChooseMoreInfoScreen} />
      <Stack.Screen name="Trips" component={TripsScreen} />
      <Stack.Screen name="New Trip" component={NewTripScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
