import React from "react";
import { View, Button, Text } from "react-native";

export default function ChooseMoreInfoScreen({ navigation, route }) {
  console.log(route.params);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{route.params.isToNEU ? "is to NEU" : "is Leave NEU"}</Text>
      <Text>
        {route.params.isDriver ? "is Driver: true" : "is Driver: false"}
      </Text>
      <Text>{"Input Address"}</Text>
      <Text>{"Input Time"}</Text>
      <Button
        title="Continue"
        onPress={() =>
          navigation.navigate("Trips", {
            isDriver: route.params.isDriver,
            isToNEU: route.params.isToNEU,
          })
        }
      />
    </View>
  );
}
