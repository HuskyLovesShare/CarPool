import React from "react";
import { View, Button, Text } from "react-native";

export default function ChooseDirectionScreen({ navigation, route }) {
  console.log(route.params);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"ChooseDirectionScreen"}</Text>
      <Text>
        {route.params.isDriver ? "is Driver: true" : "is Driver: false"}
      </Text>
      <Button
        title="To NEU"
        onPress={() => {
          if (route.params.isDriver) {
            navigation.navigate("New Trip", { isToNEU: true });
          } else {
            navigation.navigate("More Information", { isToNEU: true });
          }
        }}
      />
      <Button
        title="Leave NEU"
        onPress={() => {
          if (route.params.isDriver) {
            navigation.navigate("New Trip", { isToNEU: false });
          } else {
            navigation.navigate("More Information", { isToNEU: false });
          }
        }}
      />
    </View>
  );
}
